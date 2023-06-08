const dicErrors = {
  USER_PASS_WRONG: {
    status:404,
    message: "User or passwords wrong"
  },

  USER_NOT_FOUND: {
    status: 404,
    message: "User not found"
  },

  SERVER_ERROR: {
    status: 500,
    message: "server internal error"
  },

  USER_ALREADY_EXIST: {
    status: 409,
    message: "User already exist or email exist in database"
  }




}

module.exports = dicErrors;
