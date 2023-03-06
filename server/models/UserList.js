import mongoose from 'mongoose';

const UserListSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phoneNumber: Number,
    isActiveUser: {
      type: Boolean,
      required: true,
    },
    lastLogin: {
      type: Date,
      required: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const UserList = mongoose.model('UserList', UserListSchema);
export default UserList;
