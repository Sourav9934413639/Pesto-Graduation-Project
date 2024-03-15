import mongoose from 'mongoose';
const locationSchema=new mongoose.Schema({
    label:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    }
})
export const Location=mongoose.model("Location",locationSchema);