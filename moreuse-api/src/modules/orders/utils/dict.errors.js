const dictErrors = {
  CLOTHE_NOT_FOUND: {
    status: 404,
    message: 'clote not found'
  },
  UNPROCESED_PAYMENT: {
    status: 404,
    message: 'unprocessed payment'
  },
  SERVER_ERROR: {
    status: 500,
    message: 'server internal error!'
  }
}

module.exports = dictErrors;
