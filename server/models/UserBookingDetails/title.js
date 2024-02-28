import mongoose from 'mongoose';
const titleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
})
export const Title=mongoose.model("Title",titleSchema);