import express from 'express';
import { getAuth,addAuth } from '../controller/auth-controller.js';
const router = express.Router();

router.post('/login', getAuth);
router.post('/signup',addAuth);


export default router;