const express = require('express');
const bodyParser = require('body-parser')
//enviroment
require('dotenv').config({path: `src/env/.env.${process.env.NODE_ENV}`});
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

// para poder enviar datos al servidor por req.body se usa
// debe incluir a la app un middleware llamado bodyparser en las siguientes 2 lineas
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//connect with database

require('./src/conn/mongo_conn');

//modules
app.use('/auth', require('./src/modules/users/auth.routes')); // para usar el archivo de las rutas
app.use('/clothes', require('./src/modules/clothes/clothes.routes'));
app.use('/order', require('./src/modules/orders/orders.routes'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`)

});


