import express from 'express';
import { deleteUser, forgotPassword, getAllUsers, getSingleUser, getUserDetails, isAuthorized, login, logout, register, resetNewPassword, updatePassword, updateProfile, updateUserRole } from '../controllers/user.js';
import { isAuthenticated } from '../middleware/auth.js';
const router=express.Router();
router.route("/register").post(register);
router.route('/userDetails').get( isAuthenticated,getUserDetails);
router.route("/login").post(login);
router.route("/password/forgot").post(forgotPassword);

router.route("/logout").get(logout);
router.route("/password/reset/:token").put(resetNewPassword);
router.route("/password/update").put(isAuthenticated,updatePassword);
router.route("/me/update").put(isAuthenticated,updateProfile);
router
  .route("/admin/users")
  .get(isAuthenticated, isAuthorized("admin"), getAllUsers);

router
  .route("/admin/user/:id")
  .get(isAuthenticated, isAuthorized("admin"), getSingleUser)
  .put(isAuthenticated, isAuthorized("admin"), updateUserRole)
  .delete(isAuthenticated, isAuthorized("admin"), deleteUser);
export default router;