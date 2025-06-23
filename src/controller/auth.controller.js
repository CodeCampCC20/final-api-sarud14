import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/createError.js";

export const registerDoc = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password, specialization } = req.body;
    const DocUserName = await prisma.doctor.findFirst({
      where: {
        username,
      },
    });

    console.log(DocUserName);
    if (DocUserName) {
      createError(400, "Username has been used");
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);
    const result = await prisma.doctor.create({
      data: { username, password: hashPassword, specialization },
    });
    res.status(201).json({ message: "Register doctor Success" });
  } catch (error) {
    next(error);
  }
};


export const registerUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    console.log(user);
    if (user) {
      createError(400, "Username has been used");
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);
    const result = await prisma.user.create({
      data: { username, password: hashPassword },
    });
    res.status(201).json({ message: "Register user Success" });
  } catch (error) {
    next(error);
  }
};