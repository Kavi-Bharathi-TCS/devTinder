const User = require("../model/user");
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Invalid Token");
    }

    const decode = await jwt.verify(token, "DevTinder$2107");

    if (!decode) {
      throw new Error("Invalid Token");
    }

    console.log("Decode:", decode);

    const { _id } = decode;
    const user = await User?.findById(_id);

    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  userAuth
};
