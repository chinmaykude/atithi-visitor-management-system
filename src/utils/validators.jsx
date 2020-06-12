// Helper function
const isEmailValid = email => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};

const isEmpty = string => {
  if (string.trim() === "") {
    return true;
  } else {
    return false;
  }
};

exports.validateRegisterData = data => {
  const errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Email must be present..!!";
  } else if (!isEmailValid(data.email)) {
    errors.email = "Email entered is not a valid email..!!";
  }

  if (isEmpty(data.password)) {
    errors.password = "Password field must not be empty..!!";
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  if (isEmpty(data.handle)) {
    errors.handle = "Handle must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.validateLoginData = data => {
  const errors = {};
  if (isEmpty(data.email)) {
    errors.email = "Email field must not be empty";
  }
  if (isEmpty(data.password)) {
    errors.password = "Password field must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};
