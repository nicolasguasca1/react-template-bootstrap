import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
    verifySignup.checkRolesExist
  ],
  userCtrl.createUser
);
router.get("/", userCtrl.getUsers);
router.get(
  "/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  userCtrl.getUserById
);

export default router;
