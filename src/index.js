import app from "./app.js";
import dotenv from "dotenv"
import connectDb from "./db/connection.js";

dotenv.config({ path: "./.env" })

connectDb()
   .then(() => {

      app.listen(process.env.PORT || 8000, () => {
         console.log("\nApp listen on port no:", process.env.PORT)
      })
   })
   .catch((err) => {
      console.log("\n Database connection faild !", err)
   })