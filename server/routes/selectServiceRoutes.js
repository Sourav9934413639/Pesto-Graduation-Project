
import express from 'express';
import { addAddOn, deleteAddOn, deleteService, getSelectedService, getServiceInfoByTitle, saveSelectedService, showAllServices, updateAddOn } from '../controllers/selectService.js';
import {isAuthenticated, isAuthorized} from '../middleware/auth.js'
const router = express.Router();

router.route("/admin/selectService")
    .post(isAuthenticated,isAuthorized("admin"),saveSelectedService);

router.route("/selectService")
        .get(showAllServices);

router.route("/selectService/title")
        .post(getServiceInfoByTitle);
router.route("/admin/selectService/:id")
    .get(isAuthenticated,isAuthorized("admin"),getSelectedService)
    .post(isAuthenticated,isAuthorized("admin"),addAddOn)
    .delete(isAuthenticated,isAuthorized("admin"),deleteService);
    

router.route("/admin/selectService/:id/addOn/:addOnId")
    .put(isAuthenticated,isAuthorized("admin"),updateAddOn)
    .delete(isAuthenticated,isAuthorized("admin"),deleteAddOn);

export default router;
