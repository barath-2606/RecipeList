import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../slice/CreateSlice";

export const Store = configureStore({
    devTools: true,
    reducer:{
        ui: uiReducer,
    }
})