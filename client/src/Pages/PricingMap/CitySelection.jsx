import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import DelhiIcon from './Images/Delhi.png';
import GurgaonIcon from './Images/Gurgaon.png';
import NoidaIcon from './Images/Noida.png';
import PuneIcon from './Images/Pune.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CitySelection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');

  const cities = [
    { label: 'Delhi', icon: DelhiIcon },
    { label: 'Gurgaon', icon: GurgaonIcon },
    { label: 'Noida', icon: NoidaIcon },
    { label: 'Pune', icon: PuneIcon },
  ];

  const handleCitySelection = (cityName) => {
    setSelectedCity(cityName);
    dispatch({ type: "addLocation", payload: { key: "Location", value: cityName } });
  };

  const moveNext = () => {
    if(selectedCity===''){
      toast.error("Select your city to move further");
      return;
    }
    else{
      navigate("/ServiceSelection");
    }
  };

  return (
    <Box margin={2}>
      <Typography variant="h4" align="center" fontWeight="bold" margin={2}>
        Select Your City
      </Typography>
      <Typography variant="h5" align="center" margin={2}>
        I'm looking for a Helper in your city.
      </Typography>
      <Grid container spacing={2}>
        {cities.map((city, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={selectedCity === city.label ? 4 : 1}
              onClick={() => handleCitySelection(city.label)}
              style={{
                cursor: 'pointer',
                padding: '10px',
                textAlign: 'center',
                backgroundColor: selectedCity === city.label ? '#f0f0f0' : 'white',
                border: selectedCity === city.label ? '2px solid #3f51b5' : '2px solid transparent',
                borderRadius: '10px'
              }}
            >
              <img
                src={city.icon}
                alt={`${city.label} Icon`}
                style={{ width: '100%', maxWidth: '20rem', height: 'auto', marginBottom: '10px', borderRadius: '2rem' }}
              />
              <Typography variant="h6">{city.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" align="center" margin={2}>
        Select the location where you'd like to book a Helper
      </Typography>
      <Box mt={4} textAlign="center">
        <Button variant="contained" color="primary" style={{opacity:selectedCity===''? 0.5:1}}  onClick={moveNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CitySelection;
