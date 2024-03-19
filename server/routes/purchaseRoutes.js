import express from 'express';

import { isAuthenticated } from '../middleware/auth.js';
import { getUserPurchaseDetails, newOrderDetails, newPurchaseDetails } from '../controllers/purchase.js';

const router=express.Router();
router.post('/user/purchase/order',isAuthenticated,newOrderDetails);
router.put('/user/purchase/order/:orderId',isAuthenticated,newPurchaseDetails);

router.get('/purchases/getUserPurchaseDetails',isAuthenticated,getUserPurchaseDetails);

export default router;