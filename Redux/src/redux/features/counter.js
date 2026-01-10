import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1
}
const Counter = createSlice({
     name:'counter',
     initialState,
     reducers:{
        increment:(state)=>{
            state.value +=1;
        },
        decrement:(state)=>{
           state.value -=1;
        }
     }

})

export const{increment,decrement} = Counter.actions
export default Counter.reducer