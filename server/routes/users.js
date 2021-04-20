import express from 'express';
import { createUserOrLogIn, getUsers } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUserOrLogIn);

export default router;