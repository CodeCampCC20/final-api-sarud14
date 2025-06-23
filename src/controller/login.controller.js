import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/createError.js";
import jwt from "jsonwebtoken";

export const loginDoc = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const docLogin = await prisma.doctor.findFirst({
    where: {
      username,
    },
  });

  console.log(docLogin);
  if (!docLogin) {
    createError(400, "Username or Password is not correct");
  }
  const checkPassword = bcrypt.compareSync(password, docLogin.password);
  if (!checkPassword) {
    createError(400, "Username or Password is not correct");
  }
  const payload = {
    id: docLogin.id,
  };
  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });

  res.json({
    message: `Welcome back ${docLogin.username}`,
    payload,
    token,
  });
};

export const loginUser = async (req, res) => {

  const { username, password } = req.body;
  console.log(req.body)
  const userLogin = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  console.log("user",userLogin);
  if (!userLogin) {
    createError(400, "Username or Password is not correct");
  }
  const checkPassword = bcrypt.compareSync(password, userLogin.password);
  if (!checkPassword) {
    createError(400, "Username or Password is not correct");
  }
  const payload = {
    id: userLogin.id,
  };
  const token = jwt.sign(payload, process.env.SECRET2, { expiresIn: "1d" });

  res.json({
    message: `Welcome back ${userLogin.username}`,
    payload,
    token,
  });
};
