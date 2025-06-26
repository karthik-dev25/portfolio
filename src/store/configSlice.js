import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:'config',
    initialState:{
        headerButton:'home'
    },
    reducers:{
        changeHeaderButtons:(state,action)=>{
            state.headerButton = action.payload
        }
    }
});

export const  {changeHeaderButtons} = configSlice.actions;

export default configSlice.reducer;