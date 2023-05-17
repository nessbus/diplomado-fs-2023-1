const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

// para poder enviar datos al servidor por req.body se usa
// debe incluir a la app un middleware llamado bodyparser en las siguientes 2 lineas
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//modules
app.use('/auth', require('./src/modules/auth/auth.routes')); // para usar el archivo de las rutas

app.listen(port, () => {
  console.log(`Server running on port ${port}`)

});


