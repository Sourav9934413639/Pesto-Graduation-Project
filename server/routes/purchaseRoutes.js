import express from 'express';

import { isAuthenticated } from '../middleware/auth.js';
import { getAllSuccessfullOrders, getNewOrderDetails, newOrderDetails, newPurchaseDetails } from '../controllers/purchase.js';

const router=express.Router();

router.route('/user/:userId/purchase/order')
      .post(isAuthenticated,newOrderDetails);

router.route('/user/:userId/purchase/order/:orderId')
      .get(isAuthenticated,getNewOrderDetails)
      .put(isAuthenticated,newPurchaseDetails);

router.get('/purchases/user/:userId/allOrders',isAuthenticated,getAllSuccessfullOrders);

export default router;