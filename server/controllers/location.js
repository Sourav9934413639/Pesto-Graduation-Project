import ErrorHandler from "../Utility/ErrorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { Location } from "../models/location.js";

export const saveLocation=catchAsyncErrors(async(req,res,next)=>{
    const allLocations=await Location.find();
    if(!allLocations){
        return next(new ErrorHandler("All locations are missing",404));
    }
    const locationArray=[];
    const createLocationCard=await Location.create(req.body);
    locationArray.push(createLocationCard);
    res.status(201).json({
        success:true,
        message:"Location added successfully...",
        allLocations:locationArray
    })

})
export const getAllLocations=catchAsyncErrors(async(req,res,next)=>{
    const allLocations=await Location.find();
    if(!allLocations){
        return next(new ErrorHandler("All locations are missing",404));
    }
    res.status(200).json({
        success:true,
        allLocations
    })

})
export const updateLocation=catchAsyncErrors(async(req,res,next)=>{
    const location=await Location.findById(req.params.id);
    if(!location){
        return next(new ErrorHandler("This location is not found",404));
    }
    location.label=req.body.label;
    location.icon=req.body.icon;
    await location.save();
    res.status(200).json({
        success:true,
        message:"Location updated successfully..."
    })
})
export const deleteLocation=catchAsyncErrors(async(req,res,next)=>{
    const location=await Location.findById(req.params.id);
    if(!location){
        return next(new ErrorHandler("This location is not found",404));
    }
    await location.deleteOne();
    res.status(200).json({
        success:true,
        message:"This location is deleted successfully..."
    })
})