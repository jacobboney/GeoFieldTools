import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import { Stack } from "@mui/system";
import { Link as RouterLink } from 'react-router-dom';
import { Link } from "@mui/material"

export const Navbar = () => {
    return(
        <AppBar position="static">
            <Toolbar sx={{backgroundColor: "#00003f"}}>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <InvertColorsIcon/>
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    Well Abandonment
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit"><Link component={RouterLink} to="/" color="inherit" underline="none">Home</Link></Button>
                    <Button color="inherit"><Link component={RouterLink} to="/about" color="inherit" underline='none'>About</Link></Button>
                    <Button color="inherit">Login</Button>
                </Stack>
            </Toolbar>

        </AppBar>
    );
}