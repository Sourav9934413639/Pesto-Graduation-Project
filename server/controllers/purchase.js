import ErrorHandler from '../Utility/ErrorHandler.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { Purchase } from '../models/purchase.js';

export const newOrderDetails=catchAsyncErrors(async(req,res,next)=>{
   const orderArr=[];
    const { Title,Location,Gender,TotalPrice,obj,BasicPay,addOnObj:AddOns } = req.body;
    const purchaseInfo=await Purchase.create({Title,Location,Gender,TotalPrice,ServiceDescription:obj,BasicPay,AddOns,user:req.user});
    orderArr.push(purchaseInfo);
    res.status(201).json({success:true,message:"You have made your order",orderArr});
})
export const newPurchaseDetails=catchAsyncErrors(async(req,res,next)=>{
  const {orderId}=req.params;
  const purchase = await Purchase.findById(orderId);
  if(!purchase){
    return next(new ErrorHandler("Order not found",404));
  }
  purchase.orderStatus="Success";
  await purchase.save();
  res.status(200).json({
    success:true,
    message:"Congrats!Your payment is successfull"
  })

   
})
export const getUserPurchaseDetails = catchAsyncErrors(async (req, res, next) => {
    const userId = req.user._id;
    const purchases = await Purchase.find({ user: userId,orderStatus:"Success" });
    if(purchases.length===0){
      return res.json({
        success:false,
        userId,
        message:"This user haven't purchased any service by now"
      })
    }
    
    res.status(200).json({
      success: true,
      userId,
      purchases,
    });
  })