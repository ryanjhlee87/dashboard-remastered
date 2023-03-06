import mongoose from 'mongoose';

const SalesByMonthSchema = new mongoose.Schema(
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

const SalesByMonth = mongoose.model('SalesByMonth', SalesByMonthSchema);
export default SalesByMonth;
