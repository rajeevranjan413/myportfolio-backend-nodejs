import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"


const connectDb = async()=>{
   try{
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
   }
   catch(err){
      console.log("\nMongodb connection faild !" , err)
      process.exit(1)
   }
}

export default connectDb;