
import { Box, Button, Container, CssBaseline, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import checkoutHandler from '../Components/Checkout';
import axios from 'axios';
import toast from 'react-hot-toast';
const SummaryPage = () => {
  const summary = useSelector(state => state.serviceReducer);
  console.log(summary);
  const handleCheckout = async() => {
    try {
      const {data}=await axios.post("http://localhost:4000/api/v1/service",summary,{withCredentials:true})
      console.log(data)
      toast.success(data.message);
      checkoutHandler(summary.TotalPrice);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    
    
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <CssBaseline />
      <Box textAlign="center" boxShadow={3} p={3} borderRadius={4} bgcolor="white">
        <Stack spacing={2}>
          <Typography variant="h5">Service Details</Typography>
          <Typography variant="body1">Name of service: {summary.Title}</Typography>
          <Typography variant="body1">Your location: {summary.Location}</Typography>
          <Typography variant="body1">Your preference for gender of service provider: {summary.Gender}</Typography>
          {summary.addOnObj && (Object.keys(summary.addOnObj).map((key) => (
            <Stack key={key} direction="row" justifyContent="center" alignItems="center" mt={2}>
              <Typography variant="body1" fontWeight="bold" mr={1}>{key}:</Typography>
              <Typography variant="body1">₹{summary.addOnObj[key]}/-</Typography>
            </Stack>
          ))
          )}
          <Typography variant="body1" bgcolor="lightgreen" fontWeight={900}>Total Price: ₹{summary.TotalPrice}/-</Typography>
        </Stack>
      </Box>

      <Box mt={4}>
        <Divider />
      </Box>

      <Box mt={4}>
        <Box textAlign="center">
          <Typography variant="h5">Additional Options</Typography>
        </Box>
        <Box>
          {Object.keys(summary.obj).map((key) => (
            <Stack key={key} direction="row" justifyContent="center" alignItems="center" mt={2}>
              <Typography variant="body1" fontWeight="bold" mr={1}>{key}:</Typography>
              <Typography variant="body1">{summary.obj[key]}</Typography>
            </Stack>
          ))}
        </Box>
      </Box>
      <Box m={4} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default SummaryPage;
