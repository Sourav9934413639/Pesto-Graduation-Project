import ErrorHandler from "../Utility/ErrorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { Services } from "../models/allService.js";
export const saveAllServices=catchAsyncErrors(async(req,res,next)=>{
    const { title, serviceImgUrl } = req.body;
        let existingServices = await Services.findOne();
        if (!existingServices) {
            
            existingServices = new Services({
                services: [{ title, serviceImgUrl }]
            });
        } else {
           
            existingServices.services.push({ title, serviceImgUrl });
        }
        await existingServices.save();
        res.status(201).json({
            success: true,
            message: 'Service added successfully',
            addedService: { title, serviceImgUrl }
        });
})
export const deleteService=catchAsyncErrors(async(req,res,next)=>{
    const { serviceId } = req.params;
    const existingServices = await Services.findOne();

    if (!existingServices) {
        return next(new ErrorHandler("No services found", 404));
    }

    const updatedServices = existingServices.services.filter(service => service._id.toString() !== serviceId);
    if (updatedServices.length === existingServices.services.length) {
        return next(new ErrorHandler("Service not found", 404));
    }

    existingServices.services = updatedServices;
    await existingServices.save();

    res.status(200).json({
        success: true,
        message: 'Service deleted successfully'
    });

})
export const updateService = catchAsyncErrors(async (req, res, next) => {
    const { serviceId } = req.params;
    const { title, serviceImgUrl } = req.body;

    
        const existingServices = await Services.findOne(); 

        if (!existingServices) {
            return next(new ErrorHandler("No services found", 404));
        }
        const serviceIndex = existingServices.services.findIndex(service => service._id.toString() === serviceId);
        if (serviceIndex === -1) {
            return next(new ErrorHandler("Service not found", 404));
        }
        existingServices.services[serviceIndex].title = title;
        existingServices.services[serviceIndex].serviceImgUrl = serviceImgUrl;

        await existingServices.save();

        res.status(200).json({
            success: true,
            message: 'Service updated successfully',
            updatedService: existingServices.services[serviceIndex]
        });
    
});
export const displayAllServices=catchAsyncErrors(async(req,res,next)=>{
    const getServices=await Services.find();
        if(!getServices){
            return next(new ErrorHandler("Service not found",404));
        }
        res.status(200).json({
            success:true,
            services:getServices
        })
    
})