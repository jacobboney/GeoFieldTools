import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const layerSlice = createSlice({
    name: "layers",
    initialState: [{id: nanoid(), from: "", to: "", material: "", diameter: ""},],
    reducers: {
        addLayer: (state, action) => {
            const newLayer = {
                id: nanoid(),
                from: "", 
                to: "", 
                material: "",
                diameter: ""
            }
            state.push(newLayer);
        },
        removeLayer: (state, action) => {
            return state.filter((layer) => layer.id !== action.payload.id);
        },
        updateFrom: (state, action) => {
            const index = state.findIndex((layers) => layers.id === action.payload.id);
            state[index].from = action.payload.from;
            console.log(action.payload.from);
        },
        updateTo: (state, action) => {
            const index = state.findIndex((layers) => layers.id === action.payload.id);
            state[index].to = action.payload.to;
        },
        updateMaterial: (state, action) => {
            const index = state.findIndex((layers) => layers.id === action.payload.id);
            state[index].material = action.payload.material;
        },
        updateDiameter: (state, action) => {
            const index = state.findIndex((layers) => layers.id === action.payload.id);
            state[index].diameter = action.payload.diameter;
        },
    }

    }
);

export const { addLayer, updateFrom, updateTo, updateMaterial, updateDiameter, removeLayer } = layerSlice.actions;

export default layerSlice.reducer; 