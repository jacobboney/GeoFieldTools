import { Grid, Typography } from "@mui/material";



export default function LayerResults({id, volume, amount, index}) {
    let materialMessage;

    if(volume !== amount){
        materialMessage = "bags"
    }
    else{
        materialMessage = "cubic feet"
    }

    
    return (

        <Grid item>
            <Typography>
                Layer {index + 1} will require {Math.ceil(amount)} {materialMessage} and has a volume of {volume} 
            </Typography>
        </Grid>
    )
}