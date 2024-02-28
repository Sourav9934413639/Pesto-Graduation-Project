import mongoose from 'mongoose';
const selectServiceSchema=new mongoose.Schema({
    gender:{
        type:String,
        required:true
    },
    basicService:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    },
    addOns:{
        type:mongoose.Schema.Types.Mixed,
        default:null
    }
})
export const SelectService=mongoose.model("SelectService",selectServiceSchema);