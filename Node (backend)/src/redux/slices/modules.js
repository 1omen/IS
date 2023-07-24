import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    modules: [],
}

const modulesSlice = createSlice({
    name: 'modules',
    initialState,
    reducer: {},
})

export const modulesReducer = modulesSlice.reducer