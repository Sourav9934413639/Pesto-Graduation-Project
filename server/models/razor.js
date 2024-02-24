import mongoose from 'mongoose';
const paymentSchema=new mongoose.Schema({
    razorpay_payment_id: {
        type:String,
        required:true
    },
    razorpay_order_id:{
        type:String,
        required:true
    },
    razorpay_signature:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})
export const payDetails=mongoose.model("paymentLists",paymentSchema);