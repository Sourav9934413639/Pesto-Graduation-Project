import catchAsyncErrors from "../../middleware/catchAsyncErrors.js";
import { Location } from "../../models/UserBookingDetails/location.js";

export const saveLocation=catchAsyncErrors(async(req,res,next)=>{
    const {location}=req.body;
    await Location.create({location});
    res.status(201).json({
        success:true,
        message:"Location saved successfully..."
    })
})