import ErrorHandler from '../Utility/ErrorHandler.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { Contact } from '../models/contact.js';
export const contactDetails=catchAsyncErrors(async(req,res,next)=>{
    const {username,email,mobileNumber,message}=req.body;
    const contactInfo=await Contact.create({username,email,mobileNumber,message});
    if(!contactInfo){
      return next(new ErrorHandler("Please, fill up all the above fields", 400));
    }
    res.status(201).json({message:"Message posted successfully..."});
})