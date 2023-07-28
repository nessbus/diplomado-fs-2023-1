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
    const { clotheId } = req.body;
    const orderData = { clothe: clotheId };
    const response = await orderService.changeStatus(orderData);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}



module.exports = {
  addOrder,
  changeStatus

}
