import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import { Stack } from '@mui/system';

export default function LandingNavbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 , color: 'white'}}>
            <MenuIcon />
          </IconButton>
          <Typography sx={{flexGrow: 1}}></Typography>
          <Stack direction="row" spacing={3}>
          <Button color="inherit" sx={{color: 'white'}}><Link component={RouterLink} to="about" color="inherit" underline='none'>About</Link></Button>
          <Button color="inherit" sx={{color: 'white'}}>Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}