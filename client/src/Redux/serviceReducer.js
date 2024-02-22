import { createReducer } from "@reduxjs/toolkit/dist";
const initialState={};
export const serviceReducer=createReducer(initialState,{
  addTitle:(state,action)=>{
    const {key,value}=action.payload;
    return {
        [key]:value
    }
  },
  addLocation:(state,action)=>{
    const {key,value}=action.payload;
    return {
        ...state,
        [key]: value
      };
  
  },
  addGenderAndAmount:(state,action)=>{
    
    return {
        ...state,
        ...action.payload
    }
  },
  basicPay:(state,action)=>{
    const basicPay=action.payload;
    return {
      ...state,
      basicPay
    }
  },
  addAddOns:(state,action)=>{
    const addOnObj=action.payload;
    return {
        ...state,
        addOnObj
    }
  },
  addOtherServiceOptions:(state,action)=>{
    const obj=action.payload;
    
    return {
        ...state,
        obj
    }
  },
  removeAddOns: (state, action) => {
    const toRemove = action.payload;
    const newAddOns = { ...state.addOns };
    delete newAddOns[toRemove];
    return {
      ...state,
      addOns: newAddOns
    };
  },
  removeBasicPay: (state, action) => {
    const toRemove = action.payload;
    const newBasicPay = { ...state.basicPay };
    delete newBasicPay[toRemove];
    return {
      ...state,
      basicPay: newBasicPay
    };
  },
})
