import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ConstructionIcon from '@mui/icons-material/Construction';
import { Stack } from "@mui/system";

export const Navbar = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <ConstructionIcon/>
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    GeoFT
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
            </Toolbar>

        </AppBar>
    );
}