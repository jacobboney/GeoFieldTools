import { createSlice } from "@reduxjs/toolkit";

const layerResults = createSlice({
    name: "layerResults",
    
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
    }

});

export const { addResult, removeResult } = layerResults.actions;

export default layerResults.reducer;