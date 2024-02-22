import ErrorHandler from '../Utility/ErrorHandler.js';
import sendEmail from '../Utility/sendEmail.js';
import { sendToken } from '../Utility/token.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import {User} from '../models/user.js';
import crypto from 'crypto';

//twilio code=5DSAF9AC56M8LW6VCXM5VLZT
export const register=catchAsyncErrors(async(req,res,next)=>{
    const {username,email,password,mobileNumber,role,dob,gender}=req.body;
    const user=await User.create({username,email,password,mobileNumber,role,dob,gender});
    sendToken(user, 201, res);
})
export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
    try {
        const user = req.user;
        res.status(200).json({
          success: true,
          user,
        });
      } catch (error) {
        next(error);
      }
  })
export const login=catchAsyncErrors(async(req,res,next)=>{
    const {email,password}=req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
      }
    
      const user = await User.findOne({ email }).select("+password");
    
      if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
      }
    
      const isPasswordMatched = await user.comparePassword(password);
    
      if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
      }
    
      sendToken(user, 200, res);
})

export const logout=catchAsyncErrors((req,res,next)=>{
    const options={
        expires:new Date(Date.now()),
        httpOnly:true
    }
    res.status(200).cookie("token",null,options).json({
        success:true,
        message:"Logged Out"
    })
})
export const forgotPassword=async(req,res,next)=>{

    const {email}=req.body;
    const user=await User.findOne({email});
    console.log(user)
    
    if(!user) {
        return next(new ErrorHandler("User not found",404));
    }
    const newPasswordToken=user.getResetPasswordToken();
    await user.save({validateBeforeSave:false});
    const newPasswordUrl=`${req.protocol}://localhost:3001/api/v1/password/reset/${newPasswordToken}`
    const newPasswordMessage=`Hi ${user.username}, \n Kindly, reset your password from the below link \n\n ${newPasswordUrl} \n\n `
    try {
        const emailOptions={email:user.email,subject:"Recover your password for HelperHub",message:newPasswordMessage}
        await sendEmail(emailOptions);
        res.status(200).json({
            success:true,
            message:`Check that, \n\n Email for password recovery is sent to ${user.email} successfully...`
        })
        
    } catch (error) {
        user.resetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;
        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message,500));
    }
}
export const resetNewPassword=async(req,res,next)=>{
    try {
        const { newPassword, confirmPassword } = req.body;
        const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
    
        console.log(req.params.token, newPassword, confirmPassword);
    
        const user = await User.findOne({
          resetPasswordToken,
          resetPasswordExpire: { $gt: Date.now() },
        });
    
        if (!user) {
          return next(new ErrorHandler('Reset password token is invalid or expired', 400));
        }
    
        if (newPassword !== confirmPassword) {
          return next(new ErrorHandler('Password does not match', 400));
        }
    
        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
    
        await user.save();
    
        sendToken(user, 200, res); 
      } catch (error) {
        console.error(error);
        return next(new ErrorHandler('Internal Server Error', 500));
      }
    
}
export const updatePassword = catchAsyncErrors(async(req, res, next) => {
    const {oldPassword,newPassword,confirmPassword}=req.body;
    const user = await User.findById(req.user.id).select("+password");
  
    const isPasswordMatched = await user.comparePassword(oldPassword);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Old password is incorrect", 400));
    }
  
    if (newPassword !== confirmPassword) {
      return next(new ErrorHandler("password does not match", 400));
    }
  
    user.password = newPassword;
  
    await user.save();
  
    sendToken(user, 200, res);
  })
export const updateProfile=catchAsyncErrors(async(req,res)=>{
    const {username,email,mobileNumber,dob,gender}=req.body;
    const newUserData = {
        username,
        email,
        mobileNumber,
        dob,
        gender
      };
    
      const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    
      res.status(200).json({
        success: true,
        message:"Profile Updated Successfully..."
      });
}  

)

//Admin
export const getAllUsers=catchAsyncErrors(async(req,res)=>{

    const users = await User.find();
    res.status(200).json({
    success: true,
    users,
  });
})
export const getSingleUser=catchAsyncErrors(async(req,res)=>{
    const user = await User.findById(req.params.id);
    if (!user) {
    return next(
      new ErrorHandler(`User does not exist with Id: ${req.params.id}`,404)
    );
  }

    res.status(200).json({
    success: true,
    user,
  });
})
export const updateUserRole=catchAsyncErrors(async(req,res)=>{
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
      };
    
      await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    
      res.status(200).json({
        success: true,
      });
})
export const deleteUser=catchAsyncErrors(async(req,res)=>{
    const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }
  await user.deleteOne({_id:req.params.id});

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
})
export const isAuthorized=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler("You do not have permission to access this resource",403));

        }
        next();
    }
}