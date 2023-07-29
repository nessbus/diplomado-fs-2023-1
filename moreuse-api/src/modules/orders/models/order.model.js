const mongoose = require('mongoose');
const { Schema } = mongoose;

const currentDate = new Date();

const OrdersSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
      default: currentDate
    },
    quantity: {
      type: Number,
      required: true
      },
    clothe: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'clothes'
    },
    buyerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users'
    },
    Commission: {
      type: Number,
      default: 2000
    },
    totalOrder: {
      type: Number,
      required: true
    },
    payMethod: {
      type: String,
      required: true
    },
    sendAddress: {
      type: String,
      required: true
    },
    payCompleted: {
      type: Boolean,
      default: false
    },
    orderStatus: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true
  }
)

const Order = mongoose.model('orders', OrdersSchema);
module.exports = Order;
