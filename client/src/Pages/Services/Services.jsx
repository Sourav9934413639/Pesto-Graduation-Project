import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux';

const ServicesCard = ({ title, imageUrl }) => {
  //const [serviceInfo,setServiceInfo]=useState({});
  //const obj=useSelector(state=>state.serviceReducer);

  const dispatch=useDispatch();
  const history = useNavigate();
  const cardStyles = {
    maxWidth: 300,
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 4s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.3s ease-in-out',
    margin: '0 1rem 2rem', // Margin between cards
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Background color on hover
    },
  };

  const imageStyles = {
    width: '100%',
    height: '100%', // Image size matches card size
    objectFit: 'cover',
    borderRadius: '16px', // Border radius same as card
    transition: 'transform 4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '&:hover': {
      transform: 'scale(1.1)', // Increase size on hover
    },
  };

  const titleStyles = {
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '8px',
    color: 'black',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  const buttonStyles = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    margin: '8px',
    backgroundColor: 'black',
    color: '#fff', 
  };
  const handleBookNow = () => {
    console.log('Button clicked. Storing title in session. Title:', title);
    sessionStorage.setItem('selectedServiceTitle', title);
    localStorage.setItem('serviceInfo', JSON.stringify([{title}]));
    dispatch({type:"addTitle",payload:{key:"Title",value:title}})
    history(`/Services/${encodeURIComponent(title)}`);
  };
  
  return (
    <Paper style={cardStyles}>
      <img src={imageUrl} alt="" style={imageStyles} />
      <div style={titleStyles}>{title}</div>
      <Button variant="contained" style={buttonStyles} onClick={handleBookNow}>
        Book Now
      </Button>
    </Paper>
  );
};

const ServicesPage = () => {
  const servicesData = [
    {
      title: 'Cooking',
      imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va3xlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
    },
    {
      title: 'Cleaning',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
      title: 'Nanny',
      imageUrl: 'https://media.istockphoto.com/id/1052914688/photo/mother-sits-with-child-on-floor-and-holding-doll.webp?b=1&s=170667a&w=0&k=20&c=FpwqNujCCTIPqjIK1f2vof_tbMfyy3-bKGtsHKgsLPQ=', // Replace with actual image URL
    },
    {
      title: 'Nurse',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1676325101995-cdfc26d820bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
    },
    // Add more services as needed
  ];

  const containerStyles = {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '2rem',
    display: 'flex',
    flexWrap: 'wrap', // Allow cards to wrap to the next row
    justifyContent: 'center', // Center the cards horizontally
  };
  const headingStyles = {
    fontSize: '2rem',
    marginBottom: '1rem',
  };
  return (
    <div style={containerStyles}>
    <h1 style={headingStyles}>Services</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {servicesData.map((service, index) => (
        <ServicesCard key={index} {...service} />
      ))}
    </div>
  </div>
  );
};

export default ServicesPage;