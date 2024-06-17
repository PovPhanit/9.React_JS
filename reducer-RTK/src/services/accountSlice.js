import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// npm i @reduxjs/toolkit

export const address=createAsyncThunk('account/api',async function(){
    const res=await fetch(`https://restcountries.com/v3.1/region/europe`);
    const data= await res.json();
    console.log(data);
    return data;
})

const initialState={
    username:"",
    id:"",
    lodading:false,
}
const accountReducer =createSlice({
    name:"account",
    initialState,
    reducers:{
        updateName(state,action){
            state.username=action.payload;
        },
        updateNameID:{
            prepare(name,id){
                return {
                    payload:{
                        name,
                        id,
                    }
                }
            },
            reducer(state,action){
                state.username=action.payload.name;
                state.id=action.payload.id;
            }
        }
    },
    extraReducers:(builder)=>builder
    .addCase(address.pending,(state,action)=>{
        console.log("Pending");
        state.lodading="pending";
        console.log(action);
    })
    .addCase(address.fulfilled,(state,action)=>{
        console.log("Fulfilled");
        console.log(action);
        state.lodading="response";
    })
    .addCase(address.rejected,(state,action)=>{
        console.log("Reject");
        console.log(action);
        state.lodading="reject";
    })
    
})

export const {updateName,updateNameID} = accountReducer.actions;
export default accountReducer.reducer;