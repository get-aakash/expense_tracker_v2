import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo:{},
}
const userSlice = createSlice({
    name:'user',
    userInfo,
    reducers:{
        setUser:(state,{payload})=>{
            state.user = payload
        }
    }
})

const {reducer, actions} = userSlice
export const {setUser} = actions

export default reducer