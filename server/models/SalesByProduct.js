import mongoose from 'mongoose';

const SalesByProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    uv: {
      type: Number,
      required: true,
    },
    pv: {
      type: Number,
      required: true,
    },
    amt: {
      type: Number,
      required: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const SalesByProduct = mongoose.model('SalesByProduct', SalesByProductSchema);
export default SalesByProduct;
