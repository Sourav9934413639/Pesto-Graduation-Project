import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, Paper, Button } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loader from '../Components/Loader';
import { Stack } from '@mui/system';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams(); 
  
  const [displayMessages,setDisplayMessages]=useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/admin/user/${userId}`, { withCredentials: true });
      setUser(response.data.user);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }finally{
      setLoading(false);
    }
  };
  const handleMessageDisplay=async()=>{
    console.log(userId)
    try {
     const {data}=await axios.get(`http://localhost:4000/api/v1/contact/${userId}`,{withCredentials:true});
     console.log(data)
     setDisplayMessages(data.allMessages);
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong! Try again");
   }
  }
  useEffect(() => {
    fetchUserDetails(userId);
  }, [userId]);

  if (loading) {
    return (
      <Loader/>
    );
  }

  return (
    <Container style={{ display: 'flex', flexDirection:'column',justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Paper sx={{ padding: 2, width: '80%', maxWidth: '600px' }}>
        <Typography variant="h4" gutterBottom textAlign="center" style={{ backgroundColor: 'blue', color: 'white', padding: '0.5rem' }}>User Details</Typography>
        <Box sx={{ marginBottom: 2, textAlign: 'center' }}>
          <Typography variant="h6" mb={1} fontWeight="bold">Username: {user.username}</Typography>
          <Typography variant="body1" mb={1} fontWeight="bold">Email: {user.email}</Typography>
          <Typography variant="body1" mb={1} fontWeight="bold">Mobile Number: {user.mobileNumber}</Typography>
          <Typography variant="body1" mb={1} fontWeight="bold">Role: {user.role}</Typography>
          <Typography variant="body1" mb={1} fontWeight="bold">Gender: {user.gender}</Typography>
          <Typography variant="body1" mb={1} fontWeight="bold">Date of Birth: {new Date(user.dob).toLocaleDateString()}</Typography>
          <Button variant="contained" onClick={() => handleMessageDisplay()}>View All Messages</Button>
        </Box>
      </Paper>
      
      
    
     <Stack
        flexDirection={'column'}
        sx={{ width: '100%', height: '60vh', overflowY: 'scroll', marginTop: '1rem' }}
      >
        {displayMessages && displayMessages.length !== 0 &&
          displayMessages.map((item) => (
            <Box
              key={item._id}
              sx={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem' }}
            >
              <Typography variant="body1" style={{ wordWrap: 'break-word' }}>{item.message}</Typography>
            </Box>
          ))
        }
      </Stack>
    </Container>
  );
};

export default UserDetails;


