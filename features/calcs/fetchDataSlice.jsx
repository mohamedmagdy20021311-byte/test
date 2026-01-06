import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
    "fetch/fetchData",
    async ()=>{
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=ismailia&appid=069dbcc33cce7af189219df5adfff702") 
        return response.data
        
    }
)

const fetchDataSlice = createSlice({
    name:"fetch",
    initialState:{
        result :null,
        loading:false,
        error:null
    },
    extraReducers(builder){
        builder.addCase(fetchData.pending,(state)=>{
            state.loading = true
    })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading= false
            state.result = action.payload
        }
        ).addCase(fetchData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message || "حدث خطا في عملية جلب البيانات"
            
        })
    }
})



export default fetchDataSlice.reducer