import {configureStore} from '@reduxjs/toolkit';
import layerSlice from './layerSlice';
import layerResults from './layerResultSlice';


export default configureStore({
    reducer: {
        layers: layerSlice,
        layerResults: layerResults,
    },
})