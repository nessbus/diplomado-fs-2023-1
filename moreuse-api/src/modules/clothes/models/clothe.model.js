const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClothesSchema = new Schema(
{
  name: {
    type: String,
    required: true
  },
  target: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  sellerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },

  image: {
    type: String,
    required: true
  },

  description: String,

  status: {
    type: Number,
    default: 1
  },

  isRemoved: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true //Para que la coleccion quede con las fechas de creacion y actualizacion
  //timestamps esta por fuera del objeto Schema porque no es un campo
}

)

const Clothe = mongoose.model("clothes", ClothesSchema);

module.exports = Clothe;
