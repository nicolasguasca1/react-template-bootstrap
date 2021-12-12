import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/users.controller";
import { authJwt, verifySignup } from "../middlewares";

router.get("/ping", authJwt.verifyToken, async (req, res) => {
  res.json({ message: "pong", jwt_payload: req.jwt_payload });
});

router.post(
  "/create",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
    verifySignup.checkRolesExist
  ],
  usersCtrl.createUser
);

router.get("/", usersCtrl.getUsers);
router.get(
  "/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.getUserById
);
router.put(
  "/edit/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.updateUserById
);
router.delete(
  "/delete/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.deleteUserById
);

export default router;
