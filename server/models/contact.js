import mongoose from 'mongoose';
import validator from 'validator';
const contactSchema=new mongoose.Schema({
    username:{
        type:String,
         maxlength: [30, "Name cannot exceed 30 characters"],
         minlength: [4, "Name should have atleast 4 characters"],
    },
    email:{
        type:String,
        required:[true,"Please enter your email ID"],
        validate: [validator.isEmail, "Please Enter a valid Email"],
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
    message:{
        type:String,
        required:true,
    }
})
export const Contact=mongoose.model("contact",contactSchema)