import express from "express";
import router from "./src/routes/auth.routes.js";
import notFound from "./src/utils/pathNotFound.js"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())

app.use("/auth", router)
app.use("/", router)



app.use(notFound)

app.listen(PORT, ()=> {
  console.log(`server is running @ http://localhost:${PORT}`)
})