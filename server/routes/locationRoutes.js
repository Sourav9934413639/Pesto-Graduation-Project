import express from 'express';
import { displayLocations, saveLocations } from '../controllers/location.js';
import { upload } from '../middleware/multerMiddleware.js';
const router=express.Router();
router.route("/location").post(upload.single('icon'),saveLocations).get(displayLocations)
export default router;