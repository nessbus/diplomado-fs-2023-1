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
    items: [
      {
        clothe: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'clothes'
        },
        quantity: {
          type: Number,
          required: true
          },
        price: {
          type: Schema.Types.ObjectId,
          ref: 'clothes'
        },
      }
    ],
    buyerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users'
    },
    Commission: {
      type: Number,
      default: 2000
    },
    totalPaid: {
      type: Number,
      required: true
    },
    payMethod: {
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
