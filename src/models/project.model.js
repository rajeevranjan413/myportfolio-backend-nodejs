import mongoose from 'mongoose'


const projectSchema = new mongoose.Schema({

   title:{
      type: String,
   },
   desc:{
      type:String
   }
})

export const Project = mongoose.model("Project",projectSchema)