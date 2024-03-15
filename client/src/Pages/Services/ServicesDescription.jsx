import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Card, CardMedia, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';

function ServicesDescription() {
  const navigate = useNavigate();
  const { title } = useParams();
  const [helperData,setHelperData]=useState([]);
  const dispatch=useDispatch();
  
  useEffect(()=>{
    fetchParticularServiceInfo();
  },[])
  const fetchParticularServiceInfo=async()=>{
    try {
      const {data:{allService}}=await axios.get("http://localhost:4000/api/v1/service");
      setHelperData(allService)
    } catch (error) {
      console.log(error)
    }
  }
  const selectedService = helperData.find(service => service.title === title);
  if (!selectedService) {
    return <div>Loading...</div>;
  }
  const handleBooking=()=>{
    dispatch({type:"addTitleFromMenu",payload:{key:"Title",value:title}})
    navigate('/CitySelection')
  }
  return (
    <Container maxWidth="lg" style={{ marginTop: '1%', marginBottom: '1%' }}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} height={'80vh'}>
          <Card sx={{ width: '100%', height: '100%', borderRadius: '15px' }}>
            <CardMedia
              component="img"
              alt="Service Image"
              height="100%"
              width="100%"
              border="10px solid black"
              image={`/ImagesFiles/AllServices/${selectedService.imgName}.jpg`}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%" textAlign="center">
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>{selectedService.heading}</Typography>
            <Typography variant="h6">{selectedService.description}</Typography>
            <Button
              variant="contained"
              sx={{ color: 'white', backgroundColor: 'black', width: '10rem', mt: '1rem' }}
              onClick={handleBooking}
            >
              Book Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServicesDescription;