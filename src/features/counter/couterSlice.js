import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     count:0,
// }

export const counterSlice = createSlice({

    name: "counter",
    initialState : {
        count:0,
    },

    reducers: {
        increment : (state)=>{
            console.log(state.count,"this is state")
            state.count = state.count+1;
        },
        decrement : (state)=>{
            state.count = state.count-1;
        },
        reset : (state, action)=>{
            state.count = 0;
        }
        
    },
    


});

export const { increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;


