const {Schema,model} = require("mongoose")

const userSchema = new Schema({

    firstName:{
        type : String,
        required: true,
        maxLength: 255,
        minLength: 5
    },
    lastName:{
        type : String,
        maxLength: 255,
        minLength: 5
    },
    emailId:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String
    },
    gender:{
        type: String,
        validate(value){
            if(!["male","female"]?.includes(value)){
                throw new Error("Gender is not valid")
            }
        }
    },
    
}, {timestamps: true});

module.exports = new model("Users",userSchema);
