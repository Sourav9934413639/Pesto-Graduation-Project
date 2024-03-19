import express from 'express';
import { deleteAdditionalInfo, deleteSubsection, getAdditionalInfoByTitle, saveAdditionalInfo, showAllAdditionalInfo, updateSubsection } from '../controllers/additionalDetails.js';
import {isAuthenticated, isAuthorized} from '../middleware/auth.js'

const router=express.Router();

router.route("/admin/additionalDetails")
      .post(isAuthenticated,isAuthorized("admin"),saveAdditionalInfo);   

router.route("/additionalDetails")
      .get(showAllAdditionalInfo);

router.route("/additionalDetail/title")
      .post(getAdditionalInfoByTitle);

router.route("/admin/additionalDetails/:id")
      .delete(isAuthenticated,isAuthorized("admin"),deleteAdditionalInfo);

router.route('/admin/additionalDetails/:id/subsection/:subsectionId')
      .put(isAuthenticated,isAuthorized("admin"),updateSubsection)
      .delete(isAuthenticated,isAuthorized("admin"),deleteSubsection);

export default router;