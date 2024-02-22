import ErrorHandler from '../Utility/ErrorHandler.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { Service } from '../models/service.js';

export const serviceDetails=catchAsyncErrors(async(req,res,next)=>{
    
    const { Title,Location,Gender,TotalPrice,obj:ServiceDescription,basicPay:BasicPay,addOnObj:AddOns } = req.body;
    const serviceInfo=await Service.create({Title,Location,Gender,TotalPrice,ServiceDescription,BasicPay,AddOns});
    if(!serviceInfo){
      return next(new ErrorHandler("Please, fill up all the above fields", 400));
    }
    res.status(201).json({success:true,message:"Service posted successfully...",serviceInfo});
})