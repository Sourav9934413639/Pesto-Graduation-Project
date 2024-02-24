import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
//import twilio from 'twilio';
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        //required:[true,"Please enter your name"],
         maxlength: [30, "Name cannot exceed 30 characters"],
         minlength: [4, "Name should have atleast 4 characters"],
    },
    email:{
        type:String,
        required:[true,"Please enter your email ID"],
        unique:true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minlength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    mobileNumber: {
      type: String,
      validate: {
        validator: function (value) {
          return /^[0-9]{10}$/.test(value);
        },
        message: 'Mobile number must be a 10-digit number.',
      },
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'employee'],
        default: 'user'
    },
    gender:{
      type:String,
      enum:['Male','Female'],
    },
    dob:{
      type:Date,
      default:Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    resetPasswordToken: String,
  resetPasswordExpire: Date,

})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });

  userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id },process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE*24*60*60*1000,
    });
  };
  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
  };
 
export const User=mongoose.model("users",userSchema);