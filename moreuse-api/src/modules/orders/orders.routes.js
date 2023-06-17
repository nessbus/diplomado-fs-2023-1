const express = require ('express');
const router = express.Router();
const ordersCtrl = require('./orders.controller')
const authVerify = require('../../middlewares/authVerify');

router.post('/add', authVerify, ordersCtrl.addOrder);
router.patch('/changeStatus/:id', authVerify, ordersCtrl.changeStatus)


module.exports = router;
