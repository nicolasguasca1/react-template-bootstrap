import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import { verifySignup } from "../middlewares";

router.post("/signin", authCtrl.signIn);
router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExist],
  authCtrl.signUp
);

export default router;
