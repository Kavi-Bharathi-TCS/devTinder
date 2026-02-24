const express = require("express");
const connectDb = require("./config/database");
const User = require("./model/user");
const { ReturnDocument } = require("mongodb");
const app = express();

app.use(express.json());

app.post("/signup", async(req,res) => {
  // New instance of the user model
  console.log("Body:",req?.body);
  
    const userData = new User(req.body)
    try {
         await userData.save();
         res.send("Data saved successfully!!")
    }catch(err){
        res.status(400).send("Error while save data in DB: "+ err.message)
    }
   
})

// Get single user 
app.get("/user", async (req,res,next) => {
  try{
    const userEmailId = req?.body?.emailId;
    const user = await User.findOne({emailId: userEmailId});
     console.log(user);
    if(!user){
      res.status(404).send("No user found");
    }else{
      res.send(user);
    }
    
  }catch(err){
    res.status(400).send("Something went wrong!")
  }
})

//get all users list
app.get("/feed", async (req,res,next) => {
  try{
    const users = await User.find( );
    if(users?.length == 0){
      res.status(404).send("No users found");
    }else{
      res.send(users);
    }
  }catch(err){
    res.status(400).send("Something went wrong!")
  }
})

//Delete the user with id
app.delete("/user",async(req,res,next) =>{
  try{
    const userId = req?.body?.id;
    const op = await User.findByIdAndDelete(userId);
    console.log("Body:",op);
    res.send("user deleted succesfully!");
    

  }catch(err){
     res.status(400).send("Something went wrong!");
  }
})

// Update the user
app.patch("/user/:userId",async(req,res,next) =>{
  try{
    const userId = req?.params?.userId;
    const data = req?.body

    //Api validation to check only allowed fields are updtated
    const UPDATE_ALLOWED = ["firstName","lastName","age","skills","gender"];
    const is_valid_update = Object.keys(data)?.every((k) => UPDATE_ALLOWED?.includes(k));
    if(!is_valid_update){
      throw new Error("Update is not allowed!")
    }
    if(data?.skills?.length > 5){
      throw new Error ("Max size for skills is 5")
    }

    //By default runValidators is false, so need to make it true
    const op = await User.findByIdAndUpdate(userId,req?.body,{returnDocument: "after", runValidators: true});
    console.log("Body:",op);
    res.send(op);
    

  }catch(err){
     console.log(err?.message);
     res.status(400).send(err?.message? err?.message : "Something went wrong!");
  }
})

connectDb()
  .then(() => {
    app.listen(3000, () => {
      console.log("We are listening in the port number 3000....");
    });
  })
  .catch((err) => {
    console.log("error is logged while connecting to cluster");
  });
