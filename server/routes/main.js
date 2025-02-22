import express from 'express';
import { getHome, getUser } from '../controllers/main.js';

const router = express.Router();

router.get('', getHome);
router.get('/user', getUser);

export default router;