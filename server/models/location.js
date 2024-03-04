import mongoose from 'mongoose';
import validator from 'validator';
const locationSchema=new mongoose.Schema({
    label:{
        type:String,
        required:true
    },
    icon: { 
        type:String,
        required:true
    }
    
})
export const Location=mongoose.model("location",locationSchema)