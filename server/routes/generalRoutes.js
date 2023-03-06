import express from 'express';
import { dashboard } from '../controller/dashboard.js';

const router = express.Router();

router.get('/', dashboard);

export default router;
