import ErrorHandler from '../Utility/ErrorHandler.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { Contact } from '../models/contact.js';
import {User} from '../models/user.js';



 export const contactDetails=catchAsyncErrors(async(req,res,next)=>{
    const contactInfo = await Contact.create({
        user: req.user,
        message: req.body.message
    });

    res.status(201).json({ message: 'Message posted successfully.', contact: contactInfo });
 })
 export const getPostedMessages=catchAsyncErrors(async(req,res,next)=>{
    const userId = req.params.userId; 
    const messages = await Contact.find({ user: userId }).populate({
        path: 'user',
        select: 'username email mobileNumber',
    }); 

    if (!messages || messages.length === 0) {
      return res.status(200).json({
        success:true,
        message:"This user haven't posted anything"
      })
    }

    res.status(200).json({
      success: true,
      allMessages: messages.reverse(),
    });
   
 })
 export const setMessageStatus=catchAsyncErrors(async(req,res,next)=>{
     const {userId,messageId}=req.params;
     const {status,adminName}=req.body;
     const user=await User.findById(userId);
     if(!user){
      return next(new ErrorHandler("User not found",404));
     }
    const message=await Contact.findById(messageId);
    if(!message){
      return next(new ErrorHandler("Message not found",404));
    }
    if(status){
        message.ticket.status=status;
    }
    if(adminName){
        message.ticket.adminName=adminName;
    }
    message.isSeen=true;
    await message.save();
    res.status(200).json({
      success:true,
      message:"Message status updated"
    })
     
 })
 export const seeParticularMessage=catchAsyncErrors(async(req,res,next)=>{
  const {userId,messageId}=req.params;
   const user=await User.findById(userId)
   if(!user){
     return next(new ErrorHandler("User not found",404));
   }
  const message=await Contact.findById(messageId);
  if(!message){
    return next(new ErrorHandler("Message not found",404));
  }
  res.status(200).json({
    success:true,
   message
  })
 })

 export const getUserPendingTicketsNumber=catchAsyncErrors(async(req,res,next)=>{
   const {userId}=req.params;
   const user=await User.findById(userId);
   if(!user){
    return next(new ErrorHandler("User not found",404))
   }
   
   const numOfPendingTickets=await Contact.countDocuments({"ticket.status":"Pending",userId:userId});
   res.status(200).json({
    success:true,
    numOfPendingTickets
   })
   
 })