import express from 'express';
import { deleteParticularService, getAllServiceData, getSingleServiceByTitle, saveParticularService, updateParticularServiceData } from '../controllers/particularService.js';
import {isAuthenticated ,isAuthorized} from '../middleware/auth.js'

const router=express.Router();
router.route("/admin/service")
      .post(isAuthenticated,isAuthorized("admin"),saveParticularService);
router.route("/service").get(getAllServiceData);
router.route("/service/title").post(getSingleServiceByTitle);

router.route("/admin/service/:id")
      .put(isAuthenticated,isAuthorized("admin"),updateParticularServiceData)
      .delete(isAuthenticated,isAuthorized("admin"),deleteParticularService);
export default router;