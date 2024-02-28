import express from 'express';
import { saveSelectService } from '../../controllers/UserBookingDetails/serviceSelection.js';
const router=express.Router();
router.route("/serviceInfo").post(saveSelectService);
export default router;