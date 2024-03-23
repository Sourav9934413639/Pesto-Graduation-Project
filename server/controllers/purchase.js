import ErrorHandler from '../Utility/ErrorHandler.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { Purchase } from '../models/purchase.js';

export const newOrderDetails=catchAsyncErrors(async(req,res,next)=>{
    const {userId}=req.params;
    if(!userId){
      return next(new ErrorHandler("User not found",404))
    }
    const { Title,Location,Gender,TotalPrice,obj,BasicPay,AddOns } = req.body;
    const purchaseInfo=await Purchase.create({Title,Location,Gender,TotalPrice,ServiceDescription:obj,BasicPay,AddOns,user:req.user});

    res.status(201).json({success:true,message:"You have made your order",purchaseInfo,user:req.user,orderId:purchaseInfo._id});
})
export const newPurchaseDetails=catchAsyncErrors(async(req,res,next)=>{
  const {orderId}=req.params;
  const purchase = await Purchase.findById(orderId);
  if(!purchase){
    return next(new ErrorHandler("Order not found",404));
  }
  purchase.orderStatus="Success";
  purchase.createdAt = new Date();
  await purchase.save();
  res.status(200).json({
    success:true,
    message:"Congrats! Your payment is successfull"
  })

   
})
export const getNewOrderDetails = catchAsyncErrors(async (req, res, next) => {
  const {orderId,userId} = req.params;
  if(!userId){
    return next(new ErrorHandler("User not found",404))
  }
  const order = await Purchase.findById(orderId);
  if(!order){
    return next(new ErrorHandler("Order not found",404));
  }
  
  
  res.status(200).json({
    success: true,
    order,
  });
})
export const getAllSuccessfullOrders = catchAsyncErrors(async (req, res, next) => {
    const {userId} = req.params;
    const purchases = await Purchase.find({ user: userId,orderStatus:"Success" });
    res.status(200).json({
      success: true,
      totalPurchase:purchases.length,
      purchases:purchases.reverse()
    })
  })