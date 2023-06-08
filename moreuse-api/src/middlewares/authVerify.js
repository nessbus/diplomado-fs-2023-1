const jwt = require('jsonwebtoken');

//Bearer yyyzzz
const authVerify = (req, res, next) => {
  if (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      const token = req.headers.authorization.split(" ")[1];
      try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.payload = decoded //Payload es para guardar el token de usuario
      } catch (error) {
          if (!req.authNoMandatory) {
            return res.status(401).send('unautorized');
          }
      }

  } else {
    if (!req.authNoMandatory) {
    return res.status(400).send('Token is mandatory')
    }
  }
  next(); // next significa, ejecute la siguiente tarea
}

module.exports = authVerify;
