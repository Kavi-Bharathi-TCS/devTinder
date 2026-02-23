const { MongoClient } = require("mongodb");


//Mongo db String for DB user
const URL= 'mongodb+srv://namasteNode_01:7ICZ4SdHsMKFP5rD@namastenode.2rpw0og.mongodb.net/';

//Create a mongo client class to work on
const client = new MongoClient(URL);
const dbName = "HelloWorld";

async function check() {
    
    // Establish connection to cluster in mongo db
    await client.connect();
    console.log("Connection Established !!");
    //connect to db
    const db = client.db(dbName);
    const collection = db.collection("User");
    console.log(collection);
    

    return "done";
    
}

check().then(console.log)
        .catch(console.error)
        //Close the connection
        .finally(() => client.close)


