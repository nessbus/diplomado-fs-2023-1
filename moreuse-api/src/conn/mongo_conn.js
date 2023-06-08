const mongoose = require('mongoose'); // importacion de mongoose

//const uri = "mongodb:localhost:27017/db_moreuse";
const uri = process.env.MONGO_DB; // uri (direccion para la conexion), motor de database/ puerto de conexion/ nombre que le asignamos a la base de datos

//funcion de conexion
const conn = async () => {
  await mongoose.connect(uri);
  console.log('connection mongo running');
}

//Llamada a la funcion conn y un catch para imprimir un error en la consola
conn().catch(error => console.error('Error connecting with mongo', error));

//este archivo no se exporta porque aqui mismo realizamos la conexion a la base de datos con la llamada a la funcion conn
