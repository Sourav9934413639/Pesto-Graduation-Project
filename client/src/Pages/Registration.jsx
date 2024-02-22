import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Avatar,
  CssBaseline,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Box,
  Grid,InputLabel,Select,MenuItem,Link
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink} from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Context } from '../index';
import toast from 'react-hot-toast';
import HouseHoldImage from '../Images/HouseHoldWork.jpg'

const RegistrationForm = () => {
    const {isAuthenticated,setIsAuthenticated,loading,setLoading}=useContext(Context);

    const [form, setForm] = useState({
      username: '',
      email: '',
      password: '',
      role: 'User',
      dob: '',
      gender: 'Male',
      mobileNumber: '',
    });
  
    const handleFormChange = async(e) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    };
  
    const [hover, setOnhover] = useState(false);
  
    const handleRegistration = async (e) => {
      setLoading(true);
      e.preventDefault();
  
      try {
        const { data } = await axios.post('http://localhost:4000/api/v1/register', form,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(data);
        toast.success("You have registered successfully...");
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.message);
        setIsAuthenticated(false);
        setLoading(false);
  
      }
    };
  
    const hoverEffect = () => {
      setOnhover(true);
    };
  
    const discardHoverEffect = () => {
      setOnhover(false);
    };
  
    const textStyle = {
      fontWeight: '900',
      color: hover ? '#f57c00' : '#ffa726',
      transition: 'all 0.5s ease-in-out',
    };
    if(isAuthenticated) return <Navigate to={"/"} />
  return (
    <Container component="main" maxWidth="lg" sx={{ width: '80%' }}>
         <CssBaseline />  
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F7EFE5',
          borderRadius: '2px',
          margin: '2rem',
          padding: '2rem',
        }}
      >
        <Grid container spacing={2}>
          {/* Left Section (60%) */}
          <Grid item xs={8}>
            <img
              src={HouseHoldImage}
              alt="Left Section Image"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }}
            />
          </Grid>
          
          {/* Right Section (40%) */}
          <Grid item xs={4}>
            <Box sx={{ p: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography component="h1" variant="h5" fontWeight={"bold"} sx={{ marginBottom: 2 }}>
                Registration
              </Typography>
              <form>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  required
                  variant="outlined"
                  sx={{ marginBottom: 1.5 }}
                />
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  required
                  variant="outlined"
                  sx={{ marginBottom: 1.5 }}
                />
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  name="password"
                  required
                  variant="outlined"
                  sx={{ marginBottom: 1.5 }}
                />
                <FormControl fullWidth variant="outlined" sx={{ marginBottom: 1.5 }}>
                  <InputLabel>Role</InputLabel>
                  <Select name="role" label="Role">
                    <MenuItem value="User">User</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </FormControl>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  defaultValue="Male"
                  sx={{ marginBottom: 1.5 }}
                >
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
                <TextField
                  fullWidth
                  type="date"
                  label="DOB"
                  name="dob"
                  required
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ marginBottom: 1.5 }}
                />                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobileNumber"
                  required
                  variant="outlined"
                  sx={{ marginBottom: 1.5 }}
                />
                <Button type="submit" fullWidth variant="contained" color="primary">
                  Register
                </Button>
                <Typography variant="h6" align="center" margin={1}>
                  Already have an account?{' '}
                  <Link  to={'/login'}
                
                     onMouseOver={hoverEffect}
                    onMouseOut={discardHoverEffect}>
                    Login
                  </Link>
                </Typography>
              </form>
              {/* <Divider sx={{ width: '100%' }} /> */}
             {/* <GoogleOAuthProvider clientId="your-google-client-id">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          ;
        </GoogleOAuthProvider> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default RegistrationForm;