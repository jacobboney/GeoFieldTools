import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const layerSlice = createSlice({
    name: "layers",
    initialState: [{id: nanoid(), from: "", to: "", material: ""},],
    reducers: {
        addLayer: (state, action) => {
            const newLayer = {
                id: nanoid(),
                from: "", 
                to: "", 
                material: ""
            }
            state.push(newLayer);
        },
        removeLayer: (state, action) => {
            return state.filter((layer) => layer.id !== action.payload.id);
        },
        updateFrom: (state, action) => {
            const index = state.findIndex((layers) => layers.id === action.payload.id);
            state[index].from = action.payload.from;
        },
        updateTo: (state, action) => {
            const index = state.findIndex((layers) => layers.id === action.payload.id);
            state[index].to = action.payload.to;
        },
    }

    }
);

export const { addLayer, updateFrom, updateTo, removeLayer } = layerSlice.actions;

export default layerSlice.reducer; 