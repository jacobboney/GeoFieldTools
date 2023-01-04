import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid'
import { addLayer } from "../redux/layerSlice";

export default function LayerList() {

    const layers = useSelector((state) => state.layers);
    const dispatch = useDispatch();
    
    const handleAddLayer = () => {
        dispatch(addLayer());
    };


    return(
        <Grid container item spacing={0}>

        </Grid>
    );
}