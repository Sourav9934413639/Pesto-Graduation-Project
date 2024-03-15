import ErrorHandler from "../Utility/ErrorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { Services } from "../models/allService.js";
export const saveAllServices=catchAsyncErrors(async(req,res,next)=>{
    
    const allServices=await Services.find();
    for(const element of allServices){
        if(element.title===req.body.title){
            return next(new ErrorHandler("Already saved data with this title",404))
        }
    }
    const arr=[];
    const serviceData=await Services.create(req.body);
    arr.push(serviceData);
    res.status(201).json({
        success:true,
        message:"Service added successfully...",
        allServices:arr
    })
})
export const deleteService=catchAsyncErrors(async(req,res,next)=>{
    
    let service=await Services.findById(req.params.id);
    if (!service) {
        return next(new ErrorHandler("Service not found", 404));
    }
    await service.deleteOne();
    res.status(200).json({
        success:true,
        message:'Service deleted successfully...'
    })

})
export const updateService = catchAsyncErrors(async (req, res, next) => {
   
    let service = await Services.findById(req.params.id);
    if (!service) {
        return next(new ErrorHandler("This service not found", 404));
    }

    service.imgName=req.body.imgName;
    await service.save();
    res.status(200).json({
        success: true,
        message:' Service updated successfully...',
        updatedService:service
    });

    
});
export const displayAllServices=catchAsyncErrors(async(req,res,next)=>{
    
    const allServices=await Services.find();
    if(!allServices){
        return next(new ErrorHandler("Service not found",404))
    }
    res.status(200).json({
        success:true,
        allServices
    })
    
})