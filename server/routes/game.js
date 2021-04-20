import express from 'express';
import { play } from '../controllers/game.js';
import auth from '../middleware/auth.js';

const router = express.Router();
router.get('/', auth, play);

export default router; 