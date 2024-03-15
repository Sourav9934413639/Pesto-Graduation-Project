import mongoose from 'mongoose';
const additionalDataSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subsections:[
        {
            heading:{
                type:String,
                required:true
            },
            subHeading:{
                type:String,
                required:true
            },
            data:[
                {
                    label:{
                        type:String,
                        required:true
                    }
                }
            ]
        }
    ]
})
export const AdditionalData=mongoose.model("AdditionalData",additionalDataSchema);