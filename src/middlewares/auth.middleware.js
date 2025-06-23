import { createError } from "../utils/createError.js";
import jwt from "jsonwebtoken"

export const authCheckingUser = (req,res,next) => {
  try {
    const header = req.headers.authorization
    if(!header){
      createError(401, "Token is missing")
    }
    const token = header.split(" ")[1]
    jwt.verify(token,process.env.SECRET, (error,decode)=> {
      if(error){
        createError(401, "Token is missing")
      }
      req.user = decode
      next()
    })

  } catch (error) {
    next(error)
  }
}

export const authCheckingDoctor = (req,res,next) => {
  try {
    const header = req.headers.authorization
    if(!header){
      createError(401, "Token is missing")
    }
    const token = header.split(" ")[1]
    jwt.verify(token,process.env.SECRET, (error,decode)=> {
      if(error){
        createError(401, "Token is missing")
      }
      req.user = decode
      next()
    })

  } catch (error) {
    next(error)
  }
}