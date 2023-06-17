const express = require('express');
const authOptional = require('../../middlewares/authOptional');
const authVerify = require('../../middlewares/authVerify');
const router = express.Router();
const clothesCtrl = require('./clothes.controller');

router.post('/add', authVerify, clothesCtrl.add); // end point para agregar prenda, authVerify el middleware
router.get('/',authOptional, authVerify, clothesCtrl.getAll); // end point para obtener todas las prendas
router.get('/detail/:id', clothesCtrl.getDetail); // end point para obtener datos de una prenda

router.get('/myStuff', authVerify, clothesCtrl.getMyStuff)

router.patch('/status/:id', clothesCtrl.changeStatus);
router.put('/:id', authVerify, clothesCtrl.update);

module.exports = router;
