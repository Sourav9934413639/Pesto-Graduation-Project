import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button, Grid, Box, Container as MuiContainer } from '@mui/material';
import { Context } from '../index';
import Loader from '../Components/Loader';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Profile() {
  const { isAuthenticated, loading, user } = useContext(Context);
  
  const [basicInfo, setBasicInfo] = useState({
    username: user.username || '',
    email: user.email || '',
    mobileNumber: user.mobileNumber || '',
    dob: user.dob || '',
    gender: user.gender || '',
  });

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleBasicInfoChange = (event) => {
    setBasicInfo({
      ...basicInfo,
      [event.target.name]: event.target.value,
    });
  };


  const handlePasswordChange = (event) => {
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    });
  };

  
  const handleCardUpdation = (event) => {
    setPaymentInfo({
      ...paymentInfo,
      [event.target.name]: event.target.value,
    });
  };


  const handleUpdation = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        'http://localhost:4000/api/v1/me/update',
        {
          username: basicInfo.username,
          email: basicInfo.email,
          mobileNumber: basicInfo.mobileNumber,
          dob: basicInfo.dob,
          gender: basicInfo.gender
        },
        { withCredentials: true }
      );
      console.log('User Details Updated:', response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error updating user details:', error);
      toast.error(error.response.data.message);

    }
  };


  const handlePasswordUpdation = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        'http://localhost:4000/api/v1/password/update',
        { 
          oldPassword:password.oldPassword,
          newPassword:password.newPassword,
          confirmPassword:password.confirmPassword
        },
        { withCredentials: true }
      );
      console.log('Password Updated:', response.data);
      toast.success(response.data.message);

    } catch (error) {
      console.error('Error updating password:', error);
      toast.error(error.response.data.message);

    }
  };
  useEffect(() => {
  const storedPaymentInfo = localStorage.getItem('paymentInfo');
  if (storedPaymentInfo) {
    setPaymentInfo(JSON.parse(storedPaymentInfo));
  }
}, []);

const handlePaymentInfoUpdation = async (event) => {
  event.preventDefault();
  try {
    localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));
    toast.success("Payment information saved in your device");

  } catch (error) {
    console.error('Error while saving payment info to local storage:', error);
    toast.error("Failed to save payment information in your device.");
  }
};
   return (
    loading ? <Loader /> : (
      <MuiContainer maxWidth="lg">
        {!isAuthenticated ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1 style={{ width: '100%', textAlign: 'center' }}>Login first to access this page</h1>
            <Link to="/login">
              <button style={{ display: 'inline-block', color: 'white', border: 'none', backgroundColor: 'tomato', padding: '0.5rem 1rem', margin: '1rem 0', fontWeight: '' }}>Log In</button>
            </Link>
          </div>
        ) : (
            <>
            <div style={{display:'flex'}}>
            <form onSubmit={handleUpdation} style={{ padding: '0 16px', marginBottom: '20px' }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} mt={2}>
                  <Box fontWeight="bold" fontSize={20} textAlign="center">Basic Information:</Box>
                  <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Name"
              name="username"
              value={basicInfo.username}
              onChange={handleBasicInfoChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Email"
              name="email"
              value={basicInfo.email}
              onChange={handleBasicInfoChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Mobile"
              name="mobileNumber"
              value={basicInfo.mobileNumber}
              onChange={handleBasicInfoChange}
              
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Date of birth"
              name="dob"
              value={basicInfo.dob.substring(0,10)}
              onChange={handleBasicInfoChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Gender"
              name="gender"
              value={basicInfo.gender}
              onChange={handleBasicInfoChange}
            />
            <Box textAlign="center" mt={2} mb={4}>
          <Button type="submit" variant="contained" color="primary" onClick={handleUpdation}>
            Save
          </Button>
        </Box>
                </Grid>
              </Grid>
              
            </form>
            <form onSubmit={handlePasswordUpdation} style={{ padding: '0 16px', marginBottom: '20px' }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} mt={2}>
                  <Box fontWeight="bold" fontSize={20} textAlign="center">Change Password:</Box>
                  <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Old Password"
              name="oldPassword"
              type="password"
              value={password.oldPassword}
              onChange={handlePasswordChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="New Password"
              name="newPassword"
              type="password"
              value={password.newPassword}
              onChange={handlePasswordChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={password.confirmPassword}
              onChange={handlePasswordChange}
            />
             <Box textAlign="center" mt={2} mb={4}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
                </Grid>
              </Grid>
            </form>
            </div>
            <form onSubmit={handleCardUpdation} style={{ padding: '0 16px' }}>
            <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box fontWeight="bold" fontSize={20} textAlign="center">
              Payment Information:
            </Box>
            <Box fontWeight="bold" fontSize={16} textAlign="center">
              Add card details
            </Box>
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Name on card"
              name="cardName"
              value={paymentInfo.cardName}
              onChange={handleCardUpdation}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              type="number"
              label="Card number"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleCardUpdation}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Expiry Date"
              name="expiryDate"
              value={paymentInfo.expiryDate}
              onChange={handleCardUpdation}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="CVV"
              name="cvv"
              value={paymentInfo.cvv}
              onChange={handleCardUpdation}
            />
          </Grid>
        </Grid>
        <Box textAlign="center" mt={2} mb={4}>
          <Button type="submit" variant="contained" color="primary" onClick={handlePaymentInfoUpdation}>
            Save
          </Button>
        </Box>
              
            </form>
        </>
        )}
      </MuiContainer>
    )
  );
}

export default Profile;