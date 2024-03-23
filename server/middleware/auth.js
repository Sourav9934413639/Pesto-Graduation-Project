import { User } from "../models/user.js";
import jwt from 'jsonwebtoken';
import ErrorHandler from "../Utility/ErrorHandler.js";
export const isAuthenticated=async(req,res,next)=>{
    const { token } = req.cookies;
    if (!token) {
      return next(new ErrorHandler("Please Login to access this resource", 401));
    }
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = await User.findById(decodedData.id);
    
    next();
}
export const isAuthorized=(roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
        return next(new ErrorHandler(`Role:${req.user.role} is not allowed to access this resource`,403))
    }
    next();
}
}