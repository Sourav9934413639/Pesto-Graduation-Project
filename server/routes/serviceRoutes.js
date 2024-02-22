import express from 'express';
import { serviceDetails } from '../controllers/service.js';
const router=express.Router();
router.post('/service',serviceDetails);
export default router;