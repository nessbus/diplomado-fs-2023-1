const { response } = require('express');
const authService = require('./auth.service');

const login = (req, res) => {
  try {
  const { email, password} = req.body; //parametros que vienen de authservice
  const response = authService.login(email, password); //funcion que recibe los parametros y rsponde
  res.status(200).json(response);
  } catch (error) { //aqui capturamos el error de que viene del trow de auth.service
    res.status(error.status).json(error.response)
  }
}

const logout = (req, res) => {
  const idUser = '1234';
  const response = authService.logout(idUser);
  res.status(200).json(response);

}

const info = (req, res) => {
  const idUser = '1234';
  const response = authService.info(idUser);
  res.status(200).json(response);
}

//se usa module.exports para exportar la funcion y/o los parametros que contiene
module.exports = {
  login,
  logout,
  info
}
