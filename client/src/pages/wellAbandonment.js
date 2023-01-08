import React from "react";
import { Box, Grid, IconButton, Typography, Button } from "@mui/material";
import { Navbar } from "../components/navbar";
import LayerCard from "../components/wellAbandonment/layerCard";
import { useSelector, useDispatch } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { addLayer } from "../redux/layerSlice";

import { addResult, reset } from "../redux/layerResultSlice";
import MaterialCalc from "../utilities/materialCalc";
import LayerResults from "../components/wellAbandonment/layerResults";

function WellAbandonment() {
  const [layers, layerResults] = useSelector((state) => [
    state.layers,
    state.layerResults,
  ]);
  const dispatch = useDispatch();

  const handleAddLayer = () => {
    dispatch(addLayer());
  };

  const calculate = () =>{
    dispatch(reset());
    layers.forEach(element => {
      const resultObj = MaterialCalc(element.id, element.diameter, element.from, element.to, element.material);
      dispatch(addResult(resultObj))
    });
    layerResults.forEach(element => {
      console.log(element.id, element.volume, element.amount);
    });
    
  }


  return (
    <Box>
      <Box sx={{ position: "absolute", width: "100%" }}>
        <Navbar />
      </Box>
      <Grid
        container
        spacing={0}
        direction="row"
        display="flex"
        sx={{ minHeight: "100vh" }}
      >
        <Grid
          container
          item
          sm={5}
          md={4}
          lg={3}
          xl={2}
          sx={{ backgroundColor: "#000026" }}
        >
          <Grid
            container
            item
            sx={{ marginTop: "60px", alignContent: "start" }}
          >
            <Grid container item sx={{ alignItems: "center" }}>
              <Grid item>
                <Typography variant="h6" sx={{ m: 2, color: "white" }}>
                  Material Layers
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={() => {
                    handleAddLayer();
                  }}
                  sx={{ color: "white" }}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid container item>
              <Box
                component="form"
                sx={{ maxHeight: { sm: "80vh" }, overflow: { sm: "auto" } }}
              >
                {layers.map((layer, index) => (
                  <div key={index}>
                    <LayerCard
                      id={layer.id}
                      from={layer.from}
                      to={layer.to}
                      material={layer.material}
                      diameter={layer.diameter}
                      index={index}
                    />
                  </div>
                ))}
              </Box>
            </Grid>
            <Grid container item justifyContent="center">
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {},
                    m: 1,
                  }}
                  onClick={() => {
                    calculate();
                  }}
                >
                  Calculate
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sm={7}
          md={8}
          lg={9}
          xl={10}
          sx={{ backgroundColor: "white" }}
        >
          <Grid
            container
            item
            sx={{ marginTop: "60px", alignContent: "start" }}
          >
            <Grid container item  sx={{ alignItems: "center" }}>
              <Grid item>
                <Typography variant="h6" sx={{ m: 2, color: "black" }}>
                  Results:
                </Typography>
              </Grid>
              <Grid container item spacing={2} direction="column" sx={{m:2, pb:2}}>
                {layerResults.map((results, index) => 
                  (<LayerResults 
                    id={results.id}
                    volume={results.volume}
                    amount={results.amount}
                    index={index}
                    key={index}
                  />)
                  
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}


export default WellAbandonment;
