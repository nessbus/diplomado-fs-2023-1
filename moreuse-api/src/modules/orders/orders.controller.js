const orderService = require ('./orders.service')

const addOrder = async (req,res) => {
  try {
    const orderData = req.body;
    const {idUser} = req.payload;
    const response = await orderService.addOrder(orderData, idUser);
    res.status(200).json(response)
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

module.exports = {
  addOrder,
  changeStatus

}
