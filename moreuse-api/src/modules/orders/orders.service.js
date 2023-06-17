const mongoose = require ('mongoose');
const errorHandler = require ('../../utils/errorHandler')
const Order = require('../orders/models/order.model');
const dictErrors = require('../orders/utils/dict.errors')

const CLOTHES_STATUS = {
  FOR_SALE: 1,
  SOLD: 2,
  RESERVED: 3
}

const addOrder = async (orderData, buyerId) => {
  try {
    orderData.buyerId = buyerId;
    const order = Order(orderData);
    await order.save();
    return {
      message: 'order created',
      order
    }
  } catch (error) {
   throw error.handled ? error: errorHandler(dictErrors.SERVER_ERROR);
  }
}

const changeStatus = async (statusId) => {
  try {
    const query = { _id: clotheId}; //funciona como un where
    const update = {
      $set: {status: statusId}
      //es importante poner $set para no dañar el documento
      //si no usamos $set, se borrarian todos los campos dejando solo el campo actualizado
    };
    const result = await Clothe.updateOne(query, update)
  } catch {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
}
module.exports = {
  addOrder,
  changeStatus
}
