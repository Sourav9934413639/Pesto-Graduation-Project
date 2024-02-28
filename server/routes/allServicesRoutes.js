import express from 'express';
import { deleteService, displayAllServices, saveAllServices, updateService } from '../controllers/allService.js';
const router=express.Router();
router.route("/allServices").post(saveAllServices).get(displayAllServices);
router.route("/:serviceId").delete(deleteService).put(updateService);

export default router;