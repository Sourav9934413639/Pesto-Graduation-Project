import { configureStore } from "@reduxjs/toolkit/dist";
import {serviceReducer} from './serviceReducer'
const store=configureStore({
    reducer:{
        serviceReducer
    }
})
export default store;