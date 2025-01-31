import { createSlice } from "@reduxjs/toolkit";


const uiSlice  = createSlice({
    name: "ui",
    initialState: { open: false, dialogOpen:false },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setDialogOpen:(state, action) => {
            state.dialogOpen = action.payload
        }
    },
})

export const { setOpen, setDialogOpen } = uiSlice.actions;
export default uiSlice.reducer;