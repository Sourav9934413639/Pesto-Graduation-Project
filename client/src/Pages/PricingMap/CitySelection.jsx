import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const CitySelection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch cities from backend API
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/location');
      if (response.data.success) {
        console.log(response.data.getLocations)
        setCities(response.data.getLocations); // Update state with fetched locations
      } else {
        toast.error('Failed to fetch cities');
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
      toast.error('Failed to fetch cities');
    }
  };

  const handleCitySelection = (cityName) => {
    setSelectedCity(cityName);
    dispatch({ type: 'addLocation', payload: { key: 'Location', value: cityName } });
  };

  const moveNext = () => {
    if (selectedCity === '') {
      toast.error('Select your city to move further');
      return;
    } else {
      navigate('/ServiceSelection');
    }
  };
 console.log(cities)
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
                src={`http://localhost:4000/uploads/${city.icon}`}
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
        <Button variant="contained" color="primary" style={{ opacity: selectedCity === '' ? 0.5 : 1 }} onClick={moveNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CitySelection;
