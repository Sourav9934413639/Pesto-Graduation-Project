import express from 'express';
import { deleteLocation, getAllLocations, saveLocation, updateLocation } from '../controllers/location.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';
const router=express.Router();
router.route("/admin/location")
      .post(isAuthenticated,isAuthorized("admin"),saveLocation);
router.route("/location")
      .get(getAllLocations); 

router.route("/admin/location/:id")
      .put(isAuthenticated,isAuthorized("admin"),updateLocation)
      .delete(isAuthenticated,isAuthorized("admin"),deleteLocation); 
export default router;