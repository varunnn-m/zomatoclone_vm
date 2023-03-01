import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:false,
    userName:null,
    email:null,
    mobileNum:123456666
}

const globalSlice=createSlice({
    name: "global",
    initialState,
    reducers: {
        setMobileNum:(state,action)=>{
            state.mobileNum=action.payload
            console.log("mobile number payload: ", action.payload)
        },
        setIsLoggedIn:(state,action)=>{
            state.isLoggedIn=action.payload
            console.log("isLoggedIn payload: ", action.payload)
            //console.log(state.isLoggedIn)
        }
    }
})

export default globalSlice.reducer


export const {setMobileNum,setIsLoggedIn} =globalSlice.actions

