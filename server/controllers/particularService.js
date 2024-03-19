import ErrorHandler from "../Utility/ErrorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { ParticularService } from "../models/particularService.js";

export const saveParticularService=catchAsyncErrors(async(req,res,next)=>{
    const allService=await ParticularService.find();
    for(const element of allService){
        if(element.title===req.body.title){
            return next(new ErrorHandler("Already saved data with this title",404))
        }
    }
    
    const particularService=await ParticularService.create(req.body);
    
    res.status(201).json({
        success:true,
        particularService
    })
})
export const getAllServiceData=catchAsyncErrors(async(req,res,next)=>{
    const allService=await ParticularService.find();
    if(!allService){
        return next(new ErrorHandler("Any service not found",404));
    }
    res.status(200).json({
        success:true,
        allService
    })
})
export const getSingleServiceByTitle=catchAsyncErrors(async(req,res,next)=>{
    const {title}=req.body;
    if(!title){
        return next(new ErrorHandler("Service based on this title doesn't exist",400))
    }
    const service=await ParticularService.findOne({title});
    res.status(200).json({
        success:true,
        service
    })
 })
export const updateParticularServiceData=catchAsyncErrors(async(req,res,next)=>{
    const particularService=await ParticularService.findById(req.params.id);
    if(!particularService){
        return next(new ErrorHandler("This service not found",404));
    }
    particularService.imgName=req.body.imgName;
    particularService.description=req.body.description;
    particularService.heading=req.body.heading;
    await particularService.save();
    res.status(200).json({
        success:true,
        message:"This service is updated successfully..."
    })
})

export const deleteParticularService=catchAsyncErrors(async(req,res,next)=>{
    const particularService=await ParticularService.findById(req.params.id);
    if(!particularService){
        return next(new ErrorHandler("This service not found",404));
    }
    await particularService.deleteOne();
    res.status(200).json({
        success:true,
        message:"This service is deleted successfully.."
    })
})