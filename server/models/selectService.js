import mongoose from 'mongoose';
const serviceDataSchema = new mongoose.Schema({
   title:{
    type:String,
    required:[true,"Please enter title"]
   },
   servicesInfo:{
    serviceData:{
        header: { 
            type: String, 
            required: true 
        },
        imgName: { 
            type: String, 
            required: true
         },
        price: { 
            type: Number, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },
        description2: { 
            type: String,
             required: true 
            },
       },
       addonsData:[
        {
            header: { 
                type: String, 
                required: true 
            },
            imgName: { 
                type: String, 
                required: true
             },
            price: { 
                type: Number, 
                required: true 
            },
            description: { 
                type: String, 
                required: true 
            },
        }
       ]
  }
  });
  export const SelectService=mongoose.model("SelectService",serviceDataSchema);