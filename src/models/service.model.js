import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema({
   name:{
      type:String,
   }
})

export const Service = mongoose.model("Service",serviceSchema)