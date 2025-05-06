import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: "light"
}

export const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
        toggleMode: (state, action) => {
            state.mode = action.payload === "light" ? "dark" : "light"
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleMode } = utilSlice.actions

export default utilSlice.reducer