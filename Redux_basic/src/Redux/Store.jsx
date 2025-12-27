import { configureStore } from "@reduxjs/toolkit";
import Counter from './Slice'


const Store = configureStore({
    reducer:{
        count: Counter
    }
})

export default Store;