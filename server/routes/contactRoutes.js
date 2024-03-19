import express from 'express';
import { contactDetails, getPostedMessages, getUserPendingTicketsNumber, seeParticularMessage, setMessageStatus } from '../controllers/contact.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';
const router=express.Router();
router.route("/contact")
      .post(isAuthenticated,contactDetails)
router.route("/contact/:userId")
      .get(isAuthenticated,isAuthorized("admin"),getPostedMessages);
router.route("/contact/user/:userId/message/:messageId")
      .put(isAuthenticated,isAuthorized("admin"),setMessageStatus)
      .get(isAuthenticated,isAuthorized("admin"),seeParticularMessage);
router.route("/contact/user/tickets/:userId")
      .get(isAuthenticated,isAuthorized("admin"),getUserPendingTicketsNumber);

export default router;