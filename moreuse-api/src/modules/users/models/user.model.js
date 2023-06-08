const mongoose = require('mongoose'); // impostacion de mongoose
const { Schema } = mongoose; //importacion del objeto Schema

//modelado del Schema
const UserSchema = new Schema(
  {
    name: String,
    phone: String,
    address: String,
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
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

const User = mongoose.model("users", UserSchema); // Definiendo modelo en la variable User

module.exports = User;
