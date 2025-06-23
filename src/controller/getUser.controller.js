import prisma from "../config/prisma.js";

export const getMeUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log(id);
    const getUser = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
      omit: {
        password: true,
      },
    });
    res.status(201).json({ result: getUser})
  } catch (error) {
    next(error);
  }
};
