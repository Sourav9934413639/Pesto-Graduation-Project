import catchAsyncErrors from "../../middleware/catchAsyncErrors.js";
import { SelectService } from "../../models/UserBookingDetails/serviceSelection.js";

export const saveSelectService=catchAsyncErrors(async(req,res,next)=>{
    const {gender,basicService,addOns}=req.body;
    await SelectService.create({gender,basicService,addOns});
    res.status(201).json({
        success:true,
        message:"Gender and service information saved successfully..."
    })
})