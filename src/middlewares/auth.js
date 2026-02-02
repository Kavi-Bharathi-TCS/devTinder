const adminAuth = (req,res,next) =>{
    const token = "xyz";
    const isTokenValid = token == "xyz";
    if(!isTokenValid){
        res.status(401).send("Not Authorized");
    }else{
        next();
    }
}

const userAuth = (req,res,next) =>{
    const token = "xyz";
    const isTokenValid = token == "xyz";
    if(!isTokenValid){
        res.status(401).send("Not Authorized");
    }else{
        next();
    }
}

module.exports={
    userAuth,adminAuth
}