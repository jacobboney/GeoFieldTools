import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const layerResults = createSlice({
    name: "layerResults",
    initialState: initialState,
    reducers: {
        addResult: (state, action) => {
            const newResult = {
                id: action.payload.id,
                volume: action.payload.volume,
                amount: action.payload.amount,
            }
            state.push(newResult);
        },
        removeResult: (state, action) => {
            return state.filter((results) => results.id !== action.payload.id);
        },
        reset: () => initialState
    }

});

export const { addResult, removeResult, reset } = layerResults.actions;

export default layerResults.reducer;