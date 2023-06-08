const mongoose = require('mongoose');
const errorHandler = require ('../../utils/errorHandler');
const Clothe = require('./models/clothe.model');
const dictErrors = require('./utils/dict.errors');

const CLOTHES_STATUS = {
  FOR_SALE: 1,
  SOLD: 2,
  RESERVED: 3
}

const add = async (clotheData, sellerId) => {
  try {
    clotheData.sellerId = sellerId;
    const clothe = Clothe(clotheData);
    await clothe.save();
    return {
      message: 'clothe create',
      clothe
    }

  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
}

const getAll = async (filter) => {
  try {
    const query = {
      status: CLOTHES_STATUS.FOR_SALE
    };

    // Filtro segun lo que se reciba en la consulta
    if (filter.gender) query.gender = filter.gender;
    if (filter.target) query.target = filter.target;
    if (filter.minPrice && filter.maxPrice) {
      query.price = { $gte: filter.minPrice, $lte: filter.maxPrice}
    }
    // ↓ expresion regular mongoose para el filtro
    if (filter.name) query.name = { $regex: filter.name, $options: "i"};

    // ↓ expresion para excluir el usuario logueado en la consulta de prendas y no mostrar las prendas propias
    if (filter.excludeSeller) query.sellerId = { $ne: filter.excludeSeller };

    const clothes = await Clothe.find(query);
    return {
      clothes
    }

  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
}

// obtener Prendas de un usuario especifico
const getMyStuff = async (idUser) => {
  try {
    const query = {
      sellerId: idUser

    }
    return await Clothe.find(query);
  } catch (error) {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }

}

//Validacion del Id de la prenda
const getDetail = async (clotheId) => {
  try {
    // If para controlar el formato del Id, que siempre llegue un formato valido y devolver un error handled
    if (!mongoose.Types.ObjectId.isValid(clotheId)){
      throw errorHandler(dictErrors.CLOTHE_NOT_FOUND);
    }
    const clothe = await Clothe.findById(clotheId); // Busqueda del ID con para controlar los errores
    if (clothe) return clothe;
    throw errorHandler(dictErrors.CLOTHE_NOT_FOUND);
  } catch (error) {
      throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }
}

const changeStatus = async (statusId) => {
  try {
    const query = { _id: clotheId};
    const update = {
      $set: {status: statusId}
    };
    const result = await Clothe.updateOne(query, update)
  } catch {
    throw error.handled ? error : errorHandler(dictErrors.SERVER_ERROR);
  }

}


module.exports = {
  add,
  getAll,
  getDetail,
  changeStatus,
  getMyStuff
}
