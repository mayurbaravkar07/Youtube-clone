import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";


const searchSlice =createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheResults:(state,action)=>{
            state=Object.assign(state,action.payload);
        }
    }

})
export const {cacheResults}=searchSlice.actions;
export default searchSlice.reducer;