import { Router } from "express";
const router = Router();

import * as placesCtrl from "../controllers/places.controller";

// router.post(
//   "/create",
//   [
//     authJwt.verifyToken,
//     authJwt.isAdmin,
//     verifySignup.checkDuplicateUsernameOrEmail,
//     verifySignup.checkRolesExist
//   ],
//   usersCtrl.createUser
// );

router.get("/", placesCtrl.getPlaces);
// router.get(
//   "/:userId",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   usersCtrl.getUserById
// );
// router.put(
//   "/edit/:userId",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   usersCtrl.updateUserById
// );
// router.delete(
//   "/delete/:userId",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   usersCtrl.deleteUserById
// );

export default router;
