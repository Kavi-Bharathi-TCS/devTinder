const mongoose = require("mongoose")

//Mongo string to connect to the cluster
const URL= 'mongodb+srv://namasteNode_01:7ICZ4SdHsMKFP5rD@namastenode.2rpw0og.mongodb.net/devTinder';

const connectDb = async() =>{
    await mongoose.connect(URL);
    console.log("Database connection established!!");
    
}

module.exports = connectDb
