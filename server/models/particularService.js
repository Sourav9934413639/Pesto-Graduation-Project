import mongoose from 'mongoose';
const particularServiceSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imgName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    }
})
export const ParticularService=mongoose.model("ParticularService",particularServiceSchema);