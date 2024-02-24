import express from 'express';
import {checkout,paymentVerify} from '../controllers/paymentController.js'
import { isAuthenticated } from '../middleware/auth.js';
const router=express.Router();
router.route("/checkout").post(checkout);
router.route("/paymentVerification").post(isAuthenticated,paymentVerify);

export default router;