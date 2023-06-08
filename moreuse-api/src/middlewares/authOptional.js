
const authOptional = (req, res, next ) => {

  req.authNoMandatory = true;
  next();

}

module.exports = authOptional;
