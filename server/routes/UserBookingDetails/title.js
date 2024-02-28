import express from 'express';
import { saveTitle } from '../../controllers/UserBookingDetails/title.js';
const router=express.Router();
router.route("/title").post(saveTitle);
export default router;