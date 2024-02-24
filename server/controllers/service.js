import ErrorHandler from '../Utility/ErrorHandler.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { Services } from '../models/service.js';

export const newServiceDetails=catchAsyncErrors(async(req,res,next)=>{
    const { Title,Location,Gender,TotalPrice,obj:ServiceDescription,basicPay:BasicPay,addOnObj:AddOns } = req.body;
    const serviceInfo=await Services.create({Title,Location,Gender,TotalPrice,ServiceDescription,BasicPay,AddOns,user:req.user});
    res.status(201).json({success:true,message:"Service posted successfully...",serviceInfo});
})

export const getUserServiceDetails = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const services = await Services.find({ user: userId });
    if(services.length===0){
      return res.json({
        success:false,
        userId,
        message:"This user haven't avail any service by now"
      })
    }
    res.status(200).json({
      success: true,
      userId,
      services,
    });
  } catch (error) {
    next(error);
  }
};