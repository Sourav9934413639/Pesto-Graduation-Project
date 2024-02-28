import catchAsyncErrors from "../../middleware/catchAsyncErrors.js";
import { Title } from "../../models/UserBookingDetails/title.js";

export const saveTitle=catchAsyncErrors(async(req,res,next)=>{
    const {title}=req.body;
    await Title.create({title});
    res.status(201).json({
        success:true,
        message:"Title saved successfully..."
    })
})
