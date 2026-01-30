const express = require("express");
const app = express();

app.use("/test",(req,res,next) =>{
    console.log("Middeleware 1");
    next();
});


app.use("/hello",(req,res) =>{
    res.send("req");
})


app.listen(3000,() => {
    console.log("We are listening in the port number 3000...., no");
})