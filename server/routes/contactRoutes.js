import express from 'express';
import { contactDetails, getPostedMessages } from '../controllers/contact.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';
const router=express.Router();
router.route("/contact")
      .post(isAuthenticated,contactDetails)
router.route("/contact/:userId")
      .get(isAuthenticated,isAuthorized("admin"),getPostedMessages);



export default router;