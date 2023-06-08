//Funcion para recibir el objeto de error (erroData) y devolverlo con otros parametros

const errorHandler = (errorData, extra = {}) => {
  const response = {message: errorData.message, ...extra} //response es un objeto que va a contener el error y los extras
  return {
    status: errorData.status,
    response,
    handled: true //handled se usa para saber que los errores son controlados por nosotros
  }
}

module.exports = errorHandler;
