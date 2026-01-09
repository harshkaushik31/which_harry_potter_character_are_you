import express from 'express';
import { healthCheck } from '../controllers/healthCheck.controller.js';

const router = express.Router();

router.get('/health-check',healthCheck)

export default router