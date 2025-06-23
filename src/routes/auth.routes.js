import express from "express";
import { registerDoc, registerUser } from "../controller/auth.controller.js";
import {
  registerDocSchema,
  registerUserSchema,
  validate,
} from "../validations/validator.js";
import { loginDoc, loginUser } from "../controller/login.controller.js";
import {authCheckingDoctor, authCheckingUser} from "..//middlewares/auth.middleware.js"
import { getMeDoc } from "../controller/getDoc.controller.js";
import { getMeUser } from "../controller/getUser.controller.js";

const router = express.Router();

router.post("/register/doctor", validate(registerDocSchema),registerDoc);
router.post("/register/user", validate(registerUserSchema),registerUser);
router.post("/login/doctor", loginDoc);
router.post("/login/user", loginUser);
router.get("/doctors/me",authCheckingDoctor, getMeDoc )
router.get("/users/me",authCheckingUser, getMeUser )

export default router;
