
import ErrorHandler from "../Utility/ErrorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { SelectService } from "../models/selectService.js";
export const saveSelectedService=catchAsyncErrors(async(req,res,next)=>{

    let serviceDetails = await SelectService.findOne({ title: req.body.title });
    if (!serviceDetails) {
        serviceDetails = await SelectService.create({
          title: req.body.title,
          servicesInfo: {
            serviceData:req.body.servicesInfo.serviceData
          }
        });
      } else {
        serviceDetails.servicesInfo = req.body.servicesInfo;
        await serviceDetails.save();
      }
  
      return res.status(201).json({
        success: true,
        message:"Service saved successfully...",
        serviceDetails,
      });
})

export const showAllServices=catchAsyncErrors(async(req,res,next)=>{
    const showAllServices=await SelectService.find();
    if(!showAllServices){
        return next(new ErrorHandler("Service not found",404))
    }
    res.status(200).json({
        success:true,
        showAllServices
    })
})

export const getServiceInfoByTitle=catchAsyncErrors(async(req,res,next)=>{
    const {title}=req.body;
    if(!title){
        return next(new ErrorHandler("Service details for this title doesn't exist",400));
    }
    const particularServiceDetail=await SelectService.findOne({title});
    res.status(200).json({
        success:true,
        particularServiceDetail
    })
})
export const deleteService=catchAsyncErrors(async(req,res,next)=>{
    let service=await SelectService.findById(req.params.id);
    if (!service) {
        return next(new ErrorHandler("Service not found", 404));
    }
    await service.deleteOne();
    res.status(200).json({
        success:true,
        message:"Service deleted successfully..."
    })
})
export const getSelectedService=catchAsyncErrors(async(req,res,next)=>{
    const {id}=req.params;
    const selectedService=await SelectService.findById(id);
    if(!selectedService){
        return next(new ErrorHandler("Service not found",404));
    }
    res.status(200).json({
        success:true,
        choosedService:selectedService
    })
})
export const addAddOn=catchAsyncErrors(async(req,res,next)=>{
    const {id}=req.params;
    const {header, imgName, price, description}=req.body;
    
    let service=await SelectService.findById(id);
    if (!service) {
        return next(new ErrorHandler("Service not found", 404));
    }
    service.servicesInfo.addonsData.push({header, imgName, price, description});
    await service.save();

    return res.status(200).json({
      success: true,
      message: "Add-on added successfully...",
      service,
    });
})
export const updateAddOn=catchAsyncErrors(async(req,res,next)=>{
    const {id,addOnId}=req.params;
    const {header, imgName, price, description}=req.body;
    let service=await SelectService.findById(id);
    if (!service) {
        return next(new ErrorHandler("Service not found", 404));
    }
    const addOnToUpdate = service.servicesInfo.addonsData.find(
        (addOn) =>addOn._id.equals(addOnId)
      );
    
      if (!addOnToUpdate) {
        return next(new ErrorHandler("Add-On not found", 404));
      }
      addOnToUpdate.header = header;
      addOnToUpdate.imgName = imgName;
      addOnToUpdate.price = price;
      addOnToUpdate.description = description;
    
      await service.save();
      
    res.status(200).json({
        success:true,
        message:"Add-On updated successfully...",
        updateAddOn:addOnToUpdate
    })
})
export const deleteAddOn=catchAsyncErrors(async(req,res,next)=>{
    const {id,addOnId}=req.params;

    let service=await SelectService.findById(id);
    if (!service) {
        return next(new ErrorHandler("Service not found", 404));
    }
    const addonExists = service.servicesInfo.addonsData.some(
        addOn => addOn._id.equals(addOnId)
    );

    if (!addonExists) {
        return next(new ErrorHandler("Add-On not found", 404));
    }

    service.servicesInfo.addonsData=service.servicesInfo.addonsData.filter(addOn=>!addOn._id.equals(addOnId))
    await service.save();
    res.status(200).json({
        success:true,
        message:"Add-On deleted successfully..."
    })
})