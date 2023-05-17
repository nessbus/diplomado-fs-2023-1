//creamos una varible errorHandler que contiene los errores y le damos la ruta de donde importarlos
const errorHandler = require('../../utils/errorHandler');
const {USER_PASS_WRONG} = require('./utils/dict.errors');

// archivo para responder servicios al usuario ya sea por mensaje
// o por consulta a la base de datos
const login = (email, password) => {
  if (email === "dylanbg@gmail.com" && password === "123") {
    return{
      token: 'RRRRRSGSGSGS'
    }
  }
  throw errorHandler (USER_PASS_WRONG, {"Extra": 401 }) //Trow es el que envia el mensaje si hay algun error
}
const logout = (idUser) =>{
  return {
    message: 'User Logout'
  }
}

const info = (idUser) => {
  return {
    name: 'Dylan Bustamante',
    email: 'dylanbg@gmail.com',
    addres: "sprinfield Calle siempre viva",
    phone: "11081108"
  }
}

module.exports = {
  login,
  logout,
  info
}


