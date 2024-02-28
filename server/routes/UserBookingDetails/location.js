import express from 'express';
import { saveLocation } from '../../controllers/UserBookingDetails/location.js';
const router=express.Router();
router.route("/location").post(saveLocation);
export default router;