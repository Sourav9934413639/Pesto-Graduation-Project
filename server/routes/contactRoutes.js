import express from 'express';
import { contactDetails } from '../controllers/contact.js';
//import { isAuthenticated } from '../middleware/auth.js';
const router=express.Router();
router.route("/contact").post(contactDetails)
export default router;