import express from 'express';
import { getCharachter } from '../controllers/charachter.controller.js';

const router = express.Router();

router.post('/get-charachter', getCharachter)

export default router;