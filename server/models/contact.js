
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
    isSeen:{
        type:Boolean,
        default:false
    },
    ticket:{
        status:{
            type:String,
            default:"Pending"
        },
        adminName:{
            type:String,
            default:"None"
        }
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
});

export const Contact = mongoose.model('Contact', contactSchema);
