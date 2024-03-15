
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
});

export const Contact = mongoose.model('Contact', contactSchema);
