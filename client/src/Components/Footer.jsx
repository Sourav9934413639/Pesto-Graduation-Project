
import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: 2,
        width: '100%',
        marginTop: 'auto', // Push the footer to the bottom of the container
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap', // Allow content to wrap
            gap: '1rem', // Add some space between sections
          }}
        >
          {/* Left Section */}
          <Box sx={{ flex: '1', minWidth: '250px' }}>
            {/* Follow Us On Icons */}
            <Typography variant="h6" gutterBottom>
              Follow Us On
              <IconButton color="inherit" component={Link} href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} href="#">
                <TwitterIcon />
              </IconButton>
            </Typography>

            {/* HelperHub Font-like Logo */}
            <Typography variant="h6" gutterBottom>
              HelperHub
            </Typography>

            {/* Small 5-line Paragraph */}
            <Typography variant="body2">
              HelperHub is your dedicated partner in creating a nurturing home environment. Explore our range of
              services designed to make your life easier and more enjoyable. Whether you're seeking reliable caregivers,
              professional nursing assistance, or efficient housekeeping, we're here to cater to your unique needs.
            </Typography>
          </Box>

          {/* Center Section (Menu) */}
          <Box sx={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
            {/* Menu Links */}
            <Typography variant="body2" style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <Link href="/home" color="inherit">
                Home
              </Link>
              <Link href="/services/All services" color="inherit">
                Services
              </Link>
              <Link href="/about" color="inherit">
                About Us
              </Link>
              <Link href="/contact" color="inherit">
                Contact Us
              </Link>
            </Typography>
          </Box>

          {/* Right Section */}
          <Box sx={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
            {/* Additional Right-aligned content */}
            <Typography variant="body2">
              <Typography>HelperHub—Your Partner in Home Wellness</Typography>
              <Typography style={{ margin: '0.4rem 0' }}>
                Elevate your living experience with our trusted and compassionate services. At HelperHub, we're not
                just caregivers; we're family.
              </Typography>
              <Typography>© 2024 HelperHub. All rights reserved</Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;


