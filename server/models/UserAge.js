import mongoose from 'mongoose';

const UserAgeSchema = new mongoose.Schema(
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

    fill: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const UserAge = mongoose.model('UserAge', UserAgeSchema);
export default UserAge;
