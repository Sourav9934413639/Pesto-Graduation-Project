import {app} from './app.js';
import { connectMongoDB } from './database/db.js';
import Razorpay from 'razorpay';
connectMongoDB();
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
export const instance = new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
  });
const server=app.listen(process.env.PORT||4001,()=>{
    console.log(`Server listening to port number- ${process.env.PORT}`);
})
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });