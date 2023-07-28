const mongoose = require ('mongoose');
const errorHandler = require ('../../utils/errorHandler')
const Order = require('../orders/models/order.model');
const dictErrors = require('../orders/utils/dict.errors')
const Clothe = require('../clothes/models/clothe.model');
const { getDetail } = require('../clothes/clothes.service')

const CLOTHES_STATUS = {
  FOR_SALE: 1,
  SOLD: 2,
  RESERVED: 3
}



const addOrder = async (orderData, buyerId) => {
  try {
    //llamamos la funcion getDetail para poder obtener los datos de la prenda
    const clothe = await getDetail(orderData.clothe)
    //PREGUNTA: seria mejor tener una propia funcion de getDetail en el modulo de Ordenes???

    // guardar datos envariables
    const price = clothe.price; //a partir de la busqueda
    const quantity = orderData.quantity //desde los datos de la orden que llegan por data

    //operaciones
    const totalOrder = price * quantity

    //enviamos los datos de la order para guardar
    orderData.buyerId = buyerId;
    orderData.totalOrder = totalOrder;
    const order = Order(orderData);
    await order.save();
    return {
      message: 'order created',
      order,

    }
  } catch (error) {
   throw error.handled ? error: errorHandler(dictErrors.SERVER_ERROR);
  }
}

const changeStatus = async (orderData) => {
  try {

    const clotheId = await orderData.clothe

    const query = { _id: clotheId}; //funciona como un where
    const update = {
      $set: {status: CLOTHES_STATUS.SOLD}
      //es importante poner $set para no dañar el documento
      //si no usamos $set, se borrarian todos los campos dejando solo el campo actualizado
    };
    const result = await Clothe.updateOne(query, update)
    if (result.nModified > 0) {
      console.log('El estado de la prenda se ha cambiado a "SOLD" correctamente.');
    } else {
      console.log('No se encontró la prenda o el estado ya estaba en "SOLD".');
    }
  } catch {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
}
module.exports = {
  addOrder,
  changeStatus
}
