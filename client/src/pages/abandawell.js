import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Navbar } from "../components/navbar";
import LayerCard from "../components/layerCard";
import { useSelector, useDispatch } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { addLayer } from "../redux/layerSlice";
import MaterialCalc from "../utilities/materialCalc";

function Abandawell() {
  const layers = useSelector((state) => state.layers);
  const dispatch = useDispatch();

  const handleAddLayer = () => {
    dispatch(addLayer());
  };

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
                sx={{ maxHeight: { sm: "85vh" }, overflow: { sm: "auto" } }}
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
            <Grid container item sx={{ alignItems: "center" }}>
              <Grid item>
                <Typography variant="h6" sx={{ m: 2, color: "black" }}>
                  Results:
                </Typography>
              </Grid>
              <Grid item>
                <MaterialCalc/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Abandawell;
