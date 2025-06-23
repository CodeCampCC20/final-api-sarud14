import { object, ref, string } from "yup"

export const registerUserSchema = object({
  username: string().min(4).required("Please put Username"),
  password: string().min(6).required("Please put Password"),
  confirmPassword: string().oneOf(
    [ref("password"),null],
    "Password is not matching"
  )
})
export const registerDocSchema = object({
  username: string().min(4).required("Please put Username"),
  password: string().min(6).required("Please put Password"),
  confirmPassword: string().oneOf(
    [ref("password"),null],
    "Password is not matching"
  ),
  specialization: string().required("Please put specialization")

})


export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, {abortEarly: false})
    next()
  } catch (error) {
    const errMessage = error.errors.map((el)=> el)
    const errTxt = errMessage.join(",")
    const margeErr = new Error(errTxt)
    next(margeErr)
  }
}