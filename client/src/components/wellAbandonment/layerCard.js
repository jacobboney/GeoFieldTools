import {
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Grid,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React from "react";
import { useDispatch } from "react-redux";

import { updateFrom, updateTo, removeLayer, updateMaterial, updateDiameter } from "../../redux/layerSlice";
import { removeResult } from "../../redux/layerResultSlice";

export default function LayerCard({ id, from, to, material, diameter, index }) {
  const dispatch = useDispatch();

  const handleFromChange = (value) => {
    dispatch(updateFrom({ id, from: value }));
  };
  const handleToChange = (value) => {
    dispatch(updateTo({ id, to: value }));
  };
  const handleMaterialChange = (value) => {
    dispatch(updateMaterial({id, material: value}));
    
  }; 
  const handleDiameterChange = (value) => {
    dispatch(updateDiameter({ id, diameter: value}));
    console.log(value);
  };
  const handleRemoval = (id) => {
    dispatch(removeLayer({ id }));
    dispatch(removeResult({ id }));

  };


  return (
    <Grid container spacing={0} direction="column">
      <Card sx={{ minWidth: "200px", m: 1 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">Layer #{index + 1}</Typography>
          {index === 0 ? (
            ""
          ) : (
            <IconButton
              onClick={() => {
                handleRemoval(id);
              }}
            >
              <HighlightOffIcon sx={{ color: "#00003f" }} />
            </IconButton>
          )}
        </CardContent>
        <Grid container spacing={0} sx={{mb:1}}>
          <Grid item xs={12} md={6}>
            <CardActions>
              <TextField
                id="from"
                name="from"
                label="From"
                size="small"
                value={from}
                onChange={(e) => {
                  handleFromChange(e.target.value);
                }}
              ></TextField>
            </CardActions>
          </Grid>

          <Grid item xs={12} md={6}>
            <CardActions>
              <TextField
                id="to"
                name="to"
                label="To"
                size="small"
                value={to}
                onChange={(e) => {
                  handleToChange(e.target.value);
                }}
              ></TextField>
            </CardActions>
          </Grid>

          <Grid item xs={4} md={5}>
            <CardActions>
              <TextField
                id="diameter"
                name="diameter"
                label="Diameter"
                size="small"
                value={diameter}
                onChange={(e) => {
                  handleDiameterChange(e.target.value);
                }}
              ></TextField>
            </CardActions>
          </Grid>

          <Grid item xs={6} md={7}>
            <CardActions>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">
                  Material Type
                </InputLabel>
                <Select
                  labelId="material-select-label"
                  id="material"
                  name="material"
                  label="Material-Type"
                  value={material}
                  onChange={(e) => {
                    handleMaterialChange(e.target.value);
                  }}
                >
                  <MenuItem value={"Rock"}>Rock</MenuItem>
                  <MenuItem value={"Bentonite"}>Bentonite</MenuItem>
                  <MenuItem value={"Grout"}>Grout</MenuItem>
                </Select>
              </FormControl>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
