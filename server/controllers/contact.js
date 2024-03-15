import ErrorHandler from '../Utility/ErrorHandler.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { Contact } from '../models/contact.js';



 export const contactDetails=catchAsyncErrors(async(req,res,next)=>{
    const contactInfo = await Contact.create({
        user: req.user._id,
        message: req.body.message
    });

    res.status(201).json({ message: 'Message posted successfully.', contact: contactInfo });
 })
 export const getPostedMessages=catchAsyncErrors(async(req,res,next)=>{
    if(req.user.role !== "admin"){
        return next(new ErrorHandler("You are not authorized to access this resource",403));
    }
    const userId = req.params.userId; 
    const messages = await Contact.find({ user: userId }).populate({
        path: 'user',
        select: 'username email mobileNumber',
    }); 

    if (!messages || messages.length === 0) {
      return next(new ErrorHandler('No messages found for this user', 404));
    }

    res.status(200).json({
      success: true,
      allMessages: messages,
    });
   
 })
       