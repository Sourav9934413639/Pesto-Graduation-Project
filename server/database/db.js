import mongoose from 'mongoose';
export const connectMongoDB=async()=> {
  
  const connectionString='mongodb+srv://svishwajeet2500:0123456789@cluster0.2gtghrs.mongodb.net/'
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected successfully...');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  }
}