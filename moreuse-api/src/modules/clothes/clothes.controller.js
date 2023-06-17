const clothesService = require('./clothes.service')

const add = async (req, res) => {
  try {
    const clotheData = req.body; //Datos que llegan por el body
    const {idUser} = req.payload; //
    const response = await clothesService.add(clotheData, idUser); //
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const getAll = async (req, res) => {
  try {
    const filters = req.query;
    if (req.payload?.idUser) filters.excludeSeller = red.payload.idUser;
    // el signo ? es por si payload no existe entonces no falle la consulta

    const response = await clothesService.getAll(filters);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const getDetail = async (req, res) => {
  try {
    const {id: clotheId} = req.params;
    const response = await clothesService.getDetail(clotheId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

const getMyStuff = async (req, res) => {
  try {
    const {idUser} = req.payload;
    const response = await clothesService.getMyStuff(idUser);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

const changeStatus = async (req, res) => {
  try {
    const {id: clotheId} = req.params;
    const {statusId} = req.query;
    const response = await clothesService.changeStatus(clotheId, statusId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const update = async (req, res) => {
  try {
    const response = await null;
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

module.exports = {
  add,
  getAll,
  getDetail,
  changeStatus,
  update,
  getMyStuff

}
