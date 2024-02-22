import mongoose from 'mongoose';
import validator from 'validator';
const serviceSchema=new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    BasicPay:{
       type:mongoose.Schema.Types.Mixed,
       required:true
    },
    AddOns:mongoose.Schema.Types.Mixed,
    TotalPrice:{
        type:Number,
        required:true
    },
    ServiceDescription:mongoose.Schema.Types.Mixed
})
export const Service=mongoose.model("service",serviceSchema)