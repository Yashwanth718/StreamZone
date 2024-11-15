import { app } from "./app.js";
import { connectToDB } from "./db/db.js";
import { ApiError } from "./utils/ApiError.js";
import dotenv from "dotenv"

dotenv.config()

import userRouter from "./routes/user.route.js"


connectToDB()
.then( () => {
  app.on("error", () => {
    throw new ApiError(500,"Server not responding")
  })
  app.listen(process.env.PORT, () => {
    console.log("Server is running!")
  })
})
.catch( (err) => {
  console.log(err)
} )

app.use("/api/users",userRouter)