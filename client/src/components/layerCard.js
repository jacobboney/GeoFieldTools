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

import { updateFrom, updateTo, removeLayer } from "../redux/layerSlice";

export default function LayerCard({ id, from, to, material, index }) {
  const dispatch = useDispatch();

  const handleFromChange = (value) => {
    dispatch(updateFrom({ id, from: value }));
  };
  const handleToChange = (value) => {
    dispatch(updateTo({ id, to: value }));
  };
  const handleRemoval = (id) => {
    dispatch(removeLayer({ id }));
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
              <HighlightOffIcon sx={{color: "#00003f"}} />
            </IconButton>
          )}
        </CardContent>
        <Grid container spacing={0}>
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

          <Grid item xs={12}>
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
                >
                  <MenuItem value={0}>Rock</MenuItem>
                  <MenuItem value={1}>Bentonite</MenuItem>
                  <MenuItem value={2}>Grout</MenuItem>
                </Select>
              </FormControl>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
