//mST5quT7Cb1KENcU
import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import {errorMiddleware} from './middleware/error.js';
import user from './routes/userRoutes.js';
import userContact from './routes/contactRoutes.js';
import cookieParser from 'cookie-parser';
import paymentRoutes from './routes/paymentRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import allServicesRoutes from './routes/allServicesRoutes.js';
import titleRoutes from './routes/UserBookingDetails/title.js'
import locationRoutes from './routes/UserBookingDetails/location.js'
import userServiceRoutes from './routes/UserBookingDetails/serviceSelection.js'


config({path:"./configuration/config.env"});
export const app=express();

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1", user);
app.use("/api/v1", userContact);
app.use('/api/v1',paymentRoutes);
app.use('/api/v1',serviceRoutes);
app.use('/api/v1',allServicesRoutes);
app.use('/api/v1',titleRoutes);
app.use('/api/v1',locationRoutes);
app.use('/api/v1',userServiceRoutes);


app.get("/getKey",(req,res)=>{
    res.status(200).json({
        success:true,
        key:process.env.RAZORPAY_KEY_ID
    })
})
app.use(errorMiddleware);