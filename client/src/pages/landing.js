import React from "react";
import bgVid from "../media/video/background.mp4";
import { Box, Button, Grid, Typography } from "@mui/material";
import LandingNavbar from "../components/landingNavbar";
import OutboundIcon from '@mui/icons-material/Outbound';
import {Link as RouterLink} from "react-router-dom";

const styles = {
  heroVid: {
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    overflow: "hidden",
  },

  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,1))",
  },
};

function Landing() {
  return (
    <Grid container spacing={0}>
        
      <Box style={styles.overlay}></Box>
      
      <video style={styles.heroVid} src={bgVid} autoPlay loop muted playsInline/>
      
      <Grid container spacing={0} style={styles.content} direction="column">
      <Box style={styles.content}><LandingNavbar/></Box>
        <Grid item>
          <Typography variant="h1" color="white" align="center">
            Geo Field
            <br />
            Tools
          </Typography>
        </Grid>
        <Grid item>
            <Button variant="contained" component={RouterLink} to="well-abandonment" >Explore<OutboundIcon fontSize="small" sx={{marginLeft: "10px"}}/></Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Landing;
