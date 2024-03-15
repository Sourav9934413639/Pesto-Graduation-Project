import express from 'express';
import { deleteService, displayAllServices, saveAllServices, updateService } from '../controllers/allService.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';


const router=express.Router();

router.route("/allServices").get(displayAllServices);

router.route("/admin/allServices/add")
    .post(isAuthenticated,isAuthorized("admin"),saveAllServices);
    
router.route("/admin/allServices/service/:id")
    .delete(isAuthenticated,isAuthorized("admin"),deleteService)
    .put(isAuthenticated,isAuthorized("admin"),updateService);

export default router;