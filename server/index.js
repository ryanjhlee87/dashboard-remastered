import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import generalRoutes from './routes/generalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import saleRoutes from './routes/saleRoutes.js';

// Initial data insertion purpose only
import User from './models/UserList.js';
import UserAge from './models/UserAge.js';
import SalesByMonth from './models/SalesByMonth.js';
import SalesByProduct from './models/SalesByProduct.js';
import {
  customerList,
  groupCustomerByAge,
  salesByMonth,
  salesByProducts,
} from './data.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', generalRoutes);
app.use('/user', userRoutes);
app.use('/sales', saleRoutes);

const mongoURL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDBAndStartServer = async () => {
  try {
    mongoose.set('strictQuery', false);
    const db = await mongoose.connect(mongoURL, mongoOptions);
    if (db) {
      // Initial data insertion purpose only
      // User.insertMany(customerList);
      // UserAge.insertMany(groupCustomerByAge);
      // SalesByMonth.insertMany(salesByMonth);
      // SalesByProduct.insertMany(salesByProducts);

      console.log(`MongoDB Connected`);
      app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    }
  } catch (error) {
    console.log(error.message);
  }
};

connectDBAndStartServer();
