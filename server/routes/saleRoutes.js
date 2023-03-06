import express from 'express';
import { salesByMonth, salesByProduct } from '../controller/sales.js';

const router = express.Router();

router.get('/salesByMonth', salesByMonth);
router.get('/salesByProduct', salesByProduct);

export default router;
