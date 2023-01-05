import {configureStore} from '@reduxjs/toolkit';
import layerReducer from './layerSlice';


export default configureStore({
    reducer: {
        layers: layerReducer,
        
    },
})