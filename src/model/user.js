const {Schema,model} = require("mongoose")
const validator = require("validator")

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
        lowercase: true,
        validate(value){
            if(!validator?.isEmail(value)){
                throw new Error("This is not a valid mail Id " +value)
            }
        }
    },
    password:{
        type: String,
        validate(value){
            if(!validator?.isStrongPassword(value)){
                throw new Error("Password is not strong")
            }
        }
    },
    age:{
        type: Number
    },
    skills:{
        type: [String]
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
