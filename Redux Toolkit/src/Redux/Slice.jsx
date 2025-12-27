import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const addToCart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action) =>{
            state.items.push(action.payload)
            localStorage.setItem("cart",JSON.stringify(state.items))
        },
        removeItems:(state)=>{
            state.value>0? state.value -= 1: null
        },
        clearAllItems:(state)=>{
            state.value = 0;
        }
    }
})

export const {addItem,removeItems,clearAllItems} = addToCart.actions;
export default addToCart.reducer;