import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Paper,
  CssBaseline,
} from '@mui/material';

const PaymentPage = () => {
  const searchQuery = useSearchParams()[0];
  const refNo = searchQuery.get('reference');

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4,
    backgroundColor: 'rgb(255, 251, 245)',
    marginTop: 50,
  };

  const buttonStyle = {
    margin: '20px 0',
    backgroundColor: '#ffa726',
    color: 'white',
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} sx={pageStyle}>
        <Typography variant="h6">PAYMENT SUCCESSFUL</Typography>
        <Typography variant="body1">Reference Number:<br/>{refNo}</Typography>
        <Link to={'/'}>
          <Button variant="contained" style={buttonStyle}>
            Back to Home Page
          </Button>
        </Link>
      </Paper>
    </Container>
  );
};

export default PaymentPage;