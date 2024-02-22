import React from 'react';
import { Grid, Avatar, Box, Typography, Container as MuiContainer, Card, CardContent } from '@mui/material';

function About() {
  return (
    <MuiContainer maxWidth="lg" style={{ marginTop: '1%', marginBottom: '1%' }}>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center">
            <Avatar
              alt="Dentists"
              src="https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw="
              style={{ width: '100%', height: '100%', borderRadius: '8px' }}
            />
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
            <Typography variant="h4" style={{ fontWeight: 'bold', textAlign: 'center' }}>Welcome to HelperHub</Typography>
            <Typography variant="h6" style={{ textAlign: 'center' }}>A team of go-getters to give you a smooth experience</Typography>
            <Typography variant="body1" style={{ marginTop: '8px', textAlign: 'center' }}>
              HelperHub is dedicated to providing top-notch services to make your life easier. Our team consists of skilled professionals who are committed to delivering a seamless experience for all your needs. Whether it's assistance at home, medical support, or any other service, we've got you covered.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Meet Our Team Section */}
      <Typography variant="h4" style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>Meet Our Team</Typography>
      <Grid container spacing={3} justifyContent="center" mt={2}>
        {/* Card 1 */}
        <Grid item xs={12} md={4}>
          <Card>
            <Avatar
              alt="Team Member 1"
              src="https://example.com/team-member-1.jpg" // Replace with the actual image URL
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
            />
            <CardContent>
              <Typography variant="h6">Team Member 1</Typography>
              <Typography variant="subtitle1">Title: Title 1</Typography>
              <Typography variant="body2">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={4}>
          <Card>
            <Avatar
              alt="Team Member 2"
              src="https://example.com/team-member-2.jpg" // Replace with the actual image URL
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
            />
            <CardContent>
              <Typography variant="h6">Team Member 2</Typography>
              <Typography variant="subtitle1">Title: Title 2</Typography>
              <Typography variant="body2">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} md={4}>
          <Card>
            <Avatar
              alt="Team Member 3"
              src="https://example.com/team-member-3.jpg" // Replace with the actual image URL
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
            />
            <CardContent>
              <Typography variant="h6">Team Member 3</Typography>
              <Typography variant="subtitle1">Title: Title 3</Typography>
              <Typography variant="body2">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MuiContainer>
  );
}

export default About;