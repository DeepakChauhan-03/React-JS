import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  './Slice'

const Store = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default Store;