import express from 'express';
import { getUserServiceDetails, newServiceDetails } from '../controllers/service.js';
import { isAuthenticated } from '../middleware/auth.js';
import { isAuthorized } from '../controllers/user.js';
const router=express.Router();
router.post('/services',isAuthenticated,newServiceDetails);
router.get('/admin/services/getUserServiceDetails',isAuthenticated,isAuthorized("admin"),getUserServiceDetails);

export default router;