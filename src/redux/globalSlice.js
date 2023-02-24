import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:false,
    userName:null,
    email:null,
    mobileNum:null
}

const globalSlice=createSlice({
    name: "global",
    initialState,
    reducers: {
        setMobileNum:(state,action)=>{
            state.mobileNum=action.payload.mobileNum
        },
        setIsLoggedIn:(state,action)=>{
            state.isLoggedIn=action.payload.isLoggedIn
        }
    }
})

export default globalSlice.reducer


export const {setMobileNum,setIsLoggedIn} =globalSlice.actions

export const selectIsLoggedIn= (state)=>{state.global.isLoggedIn}
export const selectMobileNum= (state)=>{state.global.MobileNum}