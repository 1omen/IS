import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios"

export const fetchTests = createAsyncThunk('tests/fetchTests', async () => {
    const {data} = await axios.get('/learning/tests/1')
    return data
})

const initialState = {
    tests: [],
}

const testsSlice = createSlice({
    name: 'tests',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchTests.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchTests.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchTests.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        }
    }
})

export const testsReducer = testsSlice.reducer