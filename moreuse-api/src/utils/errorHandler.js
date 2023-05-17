//archivo para recibir el objeto de error

const errorHandler = (errorData, extra = {}) => { //response ={} es para inicializar el objeto response en vacio
  const response = { ...extra, message: errorData.message}
  return {
    status: errorData.status,
    response
  }
}

module.exports = errorHandler;
