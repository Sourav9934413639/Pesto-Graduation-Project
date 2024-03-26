//mST5quT7Cb1KENcU
import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import {errorMiddleware} from './middleware/error.js';
import user from './routes/userRoutes.js';
import userContact from './routes/contactRoutes.js';
import cookieParser from 'cookie-parser';
import paymentRoutes from './routes/paymentRoutes.js';
import purchaseRoutes from './routes/purchaseRoutes.js';
import allServicesRoutes from './routes/allServicesRoutes.js';
import selectServiceRoutes from './routes/selectServiceRoutes.js';
import additionalDetailsRoutes from './routes/additionalDetailsRoutes.js';
import particularServiceRoutes from './routes/particularServiceRoutes.js';
import locationRoutes from './routes/locationRoutes.js';



config({path:"./configuration/config.env"});
export const app=express();

app.use(cors({
    origin:process.env.BASE_URL,
    credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1", user);
app.use("/api/v1", userContact);
app.use('/api/v1',paymentRoutes);
app.use('/api/v1',purchaseRoutes);
app.use('/api/v1',allServicesRoutes);
app.use('/api/v1',selectServiceRoutes);
app.use('/api/v1',additionalDetailsRoutes);
app.use('/api/v1',particularServiceRoutes);
app.use('/api/v1',locationRoutes);

app.get("/getKey",(req,res)=>{
    res.status(200).json({
        success:true,
        key:process.env.RAZORPAY_KEY_ID
    })
})
app.use(errorMiddleware);