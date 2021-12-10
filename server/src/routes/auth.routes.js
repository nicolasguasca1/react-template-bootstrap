import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import { verifySignup } from "../middlewares";
import { authJwt } from "../middlewares";

router.post("/signin", authCtrl.signIn);
router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExist],
  authCtrl.signUp
);

router.post("/refresh", authJwt.verifyToken, async (req, res, next) => {
  try {
    const { refreshToken, token } = await authJwt.refreshAccessToken(
      req.cookies.refreshToken
    );
    res
      .cookie("refreshToken", refreshToken, { httpOnly: true })
      .json({ message: "Token de acceso actualizado", token });
  } catch (error) {
    next(error);
  }
});

router.delete("/sessions", authJwt.verifyToken, async (req, res, next) => {
  try {
    const { refreshToken, token } = await authJwt.increaseVersion(
      req.cookies.refreshToken
    );
    req.jwt_payload = null;
    res.cookie("refreshToken", refreshToken, { httpOnly: true }).json({
      message: "Se ha actualizado la version para los tokens, sesión cerrada",
      token
    });
  } catch (error) {
    next(error);
  }
});

export default router;
