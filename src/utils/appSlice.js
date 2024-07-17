import { createSlice } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";


const appSlice =createSlice({
    name:"app",
    initialState:{
    isMenuOpen:true,

    },
    reducers:{
       toggleMenu:(state)=>{
        state.isMenuOpen=!state.isMenuOpen;
       },

       closeMenu:(state)=>{
        state.isMenuOpen=false;
       }

    }
})
export const{toggleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;