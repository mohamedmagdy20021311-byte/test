import { configureStore } from "@reduxjs/toolkit";
import fetchDataReducer from "../../features/calcs/fetchDataSlice";

export const store = configureStore({
    reducer:{
        fetchData:fetchDataReducer
    }
})