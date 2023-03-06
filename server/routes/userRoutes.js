import express from 'express';
import { users, usersByAge } from '../controller/users.js';

const router = express.Router();

router.get('/users', users);
router.get('/usersByAge', usersByAge);

export default router;
