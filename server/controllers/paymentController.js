import {instance} from '../server.js'
import { payDetails } from '../models/razor.js';
import crypto from 'crypto';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
export const checkout=catchAsyncErrors(async(req,res)=>{
    try{
      const {amount}=req.body;
      const options = {
          amount: Number(amount)*100,
          currency:"INR",
        };
       const order= await instance.orders.create(options);
       res.status(200).json({
          success:true,
          order
       })
    }catch(err){
      console.log(err);
    }
  })
  
  export const paymentVerify=catchAsyncErrors(async(req,res)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
   const body = razorpay_order_id + "|" + razorpay_payment_id;
   const generated_signature = crypto.createHmac('sha256',process.env.RAZORPAY_KEY_SECRET)
                                .update(body.toString())
                                .digest('hex');
    const isAuthentic=generated_signature == razorpay_signature;
  if (isAuthentic) {
   const saveDetails=await payDetails.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        user:req.user,
        
    })
    res.redirect(`http://localhost:3000/PaymentSuccess?reference=${razorpay_payment_id}`)
  }
  else{
    res.status(400).json({
        success:false,
    })
  }
})