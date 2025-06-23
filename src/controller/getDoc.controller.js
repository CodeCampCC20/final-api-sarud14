import prisma from "../config/prisma.js";

export const getMeDoc = async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log(id);
    const getDoc = await prisma.doctor.findFirst({
      where: {
        id: Number(id),
      },
      omit: {
        password: true,
      },
    });
    res.status(201).json({ result: getDoc})
  } catch (error) {
    next(error);
  }
};
