import { createSlice } from "@reduxjs/toolkit"


const initialState = {
     value:0 
}
const Counter = createSlice({
    name:'count',
    initialState,
    reducers:{
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        }
    }
})

export const {increment,decrement} = Counter.actions;
export default Counter.reducer