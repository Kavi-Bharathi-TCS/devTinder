const express = require("express");
const { userAuth, adminAuth } = require("./middlewares/auth");
const app = express();


app.use("/admin",adminAuth);
app.get("/admin/getData",(req,res,next) =>{
    try{
        throw new Error("Custom one");
        res.send("User Data");

    }catch(err){
        next(err)
    }
})

app.use("/",(err,req,res,next) => {
    console.log("Error:",err);
    res.status(500).send(err)
})
app.post("/admin",(req,res) =>{
    res.send("Admin Data added")
})

app.listen(3000,() => {
    console.log("We are listening in the port number 3000....");
})