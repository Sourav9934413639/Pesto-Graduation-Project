import mongoose from 'mongoose';
import validator from 'validator';
const purchaseSchema=new mongoose.Schema({
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
    AddOns:{
        type:Object,
        default:{}
    },
    TotalPrice:{
        type:Number,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
      },
    ServiceDescription:mongoose.Schema.Types.Mixed,
    orderStatus:{
        type:"String",
        default:"Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
})
export const Purchase=mongoose.model("purchase",purchaseSchema)