import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products',async()=>{
    const resp = await fetch ('https://dummyjson.com/products');
    const jsonResp = await resp.json();
    return jsonResp.products;
})

//Creating Slice
const initialState = {
    items:[],
    status:undefined,
    error:null
}
const productSlice = createSlice({
    name:'productSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = 'succeeded',
            state.items = action.payload
        })
    }
})

export default productSlice.reducer