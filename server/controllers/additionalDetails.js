import ErrorHandler from "../Utility/ErrorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { AdditionalData } from "../models/additionalDetails.js";


export const saveAdditionalInfo = catchAsyncErrors(async (req, res, next) => {
    const {title}=req.body;
    let additionalInfo = await AdditionalData.findOne({ title });
  
    if (!additionalInfo) {
      
      additionalInfo = await AdditionalData.create({
        title: req.body.title,
        subsections: req.body.subsections,
      });
  
      return res.status(201).json({
        success: true,
        message:'Additional details is saved successfully...',
        allAdditionalDetails: [additionalInfo],
      });
    }
  
    
    additionalInfo.subsections = [...additionalInfo.subsections, ...req.body.subsections];
    await additionalInfo.save();
  
    res.status(200).json({
      success: true,
      allAdditionalDetails: [additionalInfo],
    });
  });
  

  
export const showAllAdditionalInfo=catchAsyncErrors(async(req,res,next)=>{
    const allAdditionalInfo=await AdditionalData.find();
    if(!allAdditionalInfo){
        return next(new ErrorHandler("Additional details not found",404))
    }
    res.status(200).json({
        success:true,
        allAdditionalInfo
    })
})
export const getAdditionalInfoByTitle=catchAsyncErrors(async(req,res,next)=>{
  const {title}=req.body;
  if(!title){
      return next(new ErrorHandler("Additional Information based on this title doesn't exist",400))
  }
  const particularAdditionalInfo=await AdditionalData.findOne({title});
  res.status(200).json({
      success:true,
      particularAdditionalInfo
  })
})
export const updateSubsection = catchAsyncErrors(async (req, res, next) => {
  const { id, subsectionId } = req.params;
  const { heading, subHeading, data } = req.body;

  const detail = await AdditionalData.findById(id);
  if (!detail) {
      return next(new ErrorHandler("Additional detail not found", 404));
  }

  const foundSubsection = detail.subsections.find(sub => sub._id.equals(subsectionId));
  if (!foundSubsection) {
      return next(new ErrorHandler("Subsection not found", 404));
  }

  foundSubsection.heading = heading;
  foundSubsection.subHeading = subHeading;
  foundSubsection.data = data;

  await detail.save();

  res.status(200).json({
      success: true,
      message: 'Subsection updated successfully',
      updatedSubsection: foundSubsection
  });
});

export const deleteSubsection = catchAsyncErrors(async (req, res, next) => {
    const { id, subsectionId } = req.params;
    const detail = await AdditionalData.findById(id);
    if (!detail) {
      return next(new ErrorHandler("Additional detail not found", 404));
    }
    const subsectionExists = detail.subsections.some(
      sub => sub._id.equals(subsectionId)
     );
     if (!subsectionExists) {
      return next(new ErrorHandler("Subsection not found", 404));
    }
    detail.subsections = detail.subsections.filter(sub => !sub._id.equals(subsectionId));
    await detail.save();
  
    res.status(200).json({ message: 'Subsection deleted successfully' });
  });
  
export const deleteAdditionalInfo=catchAsyncErrors(async(req,res,next)=>{
    let additionalInfo=await AdditionalData.findById(req.params.id);
    if (!additionalInfo) {
        return next(new ErrorHandler("Additional details not found", 404));
    }
    await additionalInfo.deleteOne();
    res.status(200).json({
        success:true,
        message:"Additional details is deleted successfully..."
    })
})