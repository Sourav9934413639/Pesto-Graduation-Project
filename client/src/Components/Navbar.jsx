import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Hidden from "@mui/material/Hidden";
import { useNavigate, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Context } from "../index";
import axios from 'axios';

function Navbar() {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
  const history = useNavigate();
  const [servicesMenuAnchor, setServicesMenuAnchor] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const handleServicesMenuOpen = (event) => {
    setServicesMenuAnchor(event.currentTarget);
  };
  const handleServicesMenuClose = () => {
    setServicesMenuAnchor(null);
  };

  const navigateTo = (path) => {
    history(path);
    handleServicesMenuClose();
  };

  const handleLogout = async() => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://localhost:4000/api/v1/logout',{withCredentials:true});
      console.log(data.message);
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      console.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            HelperHub
          </Typography>
          <Hidden mdUp implementation="css">
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown implementation="css">
            <Button color="inherit" onClick={() => history("/Home")}>
              Home
            </Button>
            <Button color="inherit" onClick={handleServicesMenuOpen}>
              Services
            </Button>
            <Button color="inherit" onClick={() => history("/About")}>
              About Us
            </Button>
            <Button color="inherit" onClick={() => history("/Contact")}>
              Contact Us
            </Button>
            {isAuthenticated ? (
              <>
                <Button color="inherit" onClick={() => history("/Profile")}>
                  My Profile
                </Button>
                <Button color="inherit" onClick={handleLogout} disabled={loading}>
                  Log Out
                </Button>
              </>
            ) : (
              <Link to="/login" style={{ color: 'white' }}>
                <Button color="inherit">
                  Log In
                </Button>
              </Link>
            )}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={servicesMenuAnchor}
        open={Boolean(servicesMenuAnchor)}
        onClose={handleServicesMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      >
        <MenuItem onClick={() => navigateTo("/Services/All services")}>
          Services(All)
        </MenuItem>
        
        <MenuItem onClick={() => navigateTo("/Services/Cooking")}>
          Cooking Maid
        </MenuItem>
        
        <MenuItem onClick={() => navigateTo("/Services/Nurse")}>
          Medical Care
        </MenuItem>
        <MenuItem onClick={() => navigateTo("/Services/Nanny")}>
          Nanny
        </MenuItem>
        <MenuItem onClick={() => navigateTo("/Services/Cleaning")}>
          House Maid
        </MenuItem>
      </Menu>
    </>
  );
}

export default Navbar;