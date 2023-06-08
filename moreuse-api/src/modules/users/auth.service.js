//creamos una varible errorHandler que contiene los errores y le damos la ruta de donde importarlos
const errorHandler = require('../../utils/errorHandler');
const User = require('./models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const {USER_PASS_WRONG, SERVER_ERROR,
      USER_ALREADY_EXIST, USER_NOT_FOUND
      } = require('./utils/dict.errors');


// archivo para responder servicios al usuario ya sea por mensaje
// o por consulta a la base de datos
const login = async (email, password) => {
  try {
      const user = await User.findOne({email, isRemoved: false});
    if (user) {
      const match = await bcrypt.compare(password, user.password); //comparacion de la contrasena
      if (match) {
        const payload = {
          idUser: user._id // payload es para guardar el json webtoken, podemos guardar cualquier dato en este caso solo traemos el _id de mongo
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET)
        return {
          token
        }
      }
    }
    throw errorHandler(USER_PASS_WRONG, {"Extra": 401, "ip": "121.880.132" })
        //errorHandler contiene un objeto response con el espacio de datos extras en el mensaje y el mensaje que errorData.mesagge
        //Trow es el que envia el mensaje si hay algun error
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR);

  }
}

const signup = async (userData) =>{
  try{
    const validateUser = await User.findOne({email: userData.email}); // consulta a la base de datos
    // ↓ If para valiar si el correo consultado con validateUser existe y devolver un error
    if (validateUser) {
      throw errorHandler(USER_ALREADY_EXIST)
    }
    const passHashed = await bcrypt.hash(userData.password, 10); //encryptamiento de password
    userData.password = passHashed;

    const user = User(userData);
    await user.save(); // la funcion del ORM de mongoose usa .save para guardar el registro,
                       // esto evita que deba hacer el --> insert_one ({}) manualmente
    // para que el await no me presente problemas debo usar el async en la declaracion
    return {
      message: 'User Create',
      user
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}


const logout = (idUser) =>{
  return {
    message: 'User Logout'
  }
}


const info = async (idUser) => {
  try {
    const user = await User.findById(idUser);
    //return user ? user : errorHandler(USER_NOT_FOUND);
    return user || errorHandler(USER_NOT_FOUND);

  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

module.exports = {
  login,
  logout,
  info,
  signup
}


