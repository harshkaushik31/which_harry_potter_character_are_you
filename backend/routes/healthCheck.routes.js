import express from 'express';
import { healthCheck } from '../controllers/healthCheck.controller.js';

const router = express.Router();

router.get('/healthCheck',healthCheck)

export default router