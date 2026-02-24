const validator = require("validator");

const validateSignupData = (req) => {
  const { firstName, lastName, password, emailId } = req?.body;

  if (!firstName || !lastName) {
    throw new Error("Last name or first name is not present");
  } else if (!validator?.isEmail(emailId)) {
    throw new Error("Email id is not valid");
  } else if (!validator?.isStrongPassword(password)) {
    throw new Error("Password is not strong");
  }
};

module.exports = {
  validateSignupData,
};
