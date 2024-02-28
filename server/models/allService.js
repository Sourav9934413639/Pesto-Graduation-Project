import mongoose from 'mongoose';
const servicesSchema=new mongoose.Schema({
    services:[
    {
    title:{
        type:String,
        required:true
    },
    serviceImgUrl:{
        type:String,
        required:true
    }
    }        
  ]
})
export const Services=mongoose.model("allServices",servicesSchema);