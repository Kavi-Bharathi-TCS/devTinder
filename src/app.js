const express = require("express");
const app = express();

app.use("/user",[(req,res,next) =>{
    //Route Handler 01
    console.log("Response 01!!");
    next();
   // res.send("Response 01!!!"); 
},
(req,res,next) => {
    // Route Handler 02
    console.log("Response 2!!");
    next();
   // res.send("Response 2!!")
},
(req,res,next) => {
    // Route Handler 03
    console.log("Response 3!!");
    next();
   // res.send("Response 2!!")
},
(req,res) => {
    // Route Handler 04
    console.log("Response 4!!");
    res.send("Response 4!!")
}]
)

app.get("/user/:userId/:password",(req,res) =>{
    res.send(req.params)
});

app.post("/user",(req,res) =>{
    res.send("Data saved successfully")
});

app.patch("/user",(req,res) =>{
    res.send("Data updated successfully")
});

app.delete("/user",(req,res) =>{
    res.send("Data deleted successfully")
});

app.listen(3000,() => {
    console.log("We are listening in the port number 3000....");
})