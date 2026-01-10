import { configureStore } from '@reduxjs/toolkit'
import count from './features/counter'

const store = configureStore({
    reducer:{
        counter:count
    }
});

export default store;