import React, { useState, useEffect } from 'react';
import {
  IconButton,
  InputBase,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container
} from '@mui/material';
import { Search, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';


const items = [
  { id: 1, content: <img src="https://img.freepik.com/free-photo/different-ingredients-composition-with-copy-space_23-2148541881.jpg?w=1380&t=st=1705303719~exp=1705304319~hmac=2e5866a79b5a958388a2a78326cae788f3f2cabf156859d150d5db81888dc24e" alt="Slide 1" style={{ width: '100%', position: 'relative', height: '600px' }} /> },
  { id: 2, content: <img src="https://img.freepik.com/free-vector/white-abstract-background-3d-paper-style_23-2148403776.jpg?w=996&t=st=1705303794~exp=1705304394~hmac=9e6d133aeda498078176f879163729dfd5e07aa351ce86756d450140011eb6ff" alt="Slide 2" style={{ width: '100%', position: 'relative', height: '600px' }} /> },
  { id: 3, content: <img src="https://img.freepik.com/free-photo/dishes-eco-soap-cleaners_23-2148824645.jpg?w=1380&t=st=1705303899~exp=1705304499~hmac=0158d7dac8ea135bff304c8fb372e8a4c3b2dba8753f910ab91bbab9a7f745e1" alt="Slide 3" style={{ width: '100%', position: 'relative', height: '600px' }} /> },
  // Add more slides as needed
];

const featuredServices = [
  { id: 1, title: 'Cooking', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 2, title: 'Medical', image: 'https://plus.unsplash.com/premium_photo-1676325101995-cdfc26d820bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 3, title: 'Nanny', image: 'https://media.istockphoto.com/id/1052914688/photo/mother-sits-with-child-on-floor-and-holding-doll.webp?b=1&s=170667a&w=0&k=20&c=FpwqNujCCTIPqjIK1f2vof_tbMfyy3-bKGtsHKgsLPQ='},
  { id: 4, title: 'Cleaning', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];
const whyChooseUs = [
  { id: 1, image:'https://cdn.iconscout.com/icon/premium/png-512-thumb/reliability-3230436-2690909.png?f=webp&w=256', title: 'Experienced and Reliable', description: 'We’re not an agency, but a young startup run by a passionate group of professionals.' },
  { id: 2, image:'https://static.thenounproject.com/png/850698-200.png', title: 'Transparent Pricing', description: 'You get what you pay for. Additionally, you get replacement guarantee, Covid-19 test reports, verification documents and more!' },
  { id: 3, image:'https://cdn-icons-png.flaticon.com/512/3930/3930266.png', title: 'Customer Support', description: 'Our executives will always be there to hear you out and solve your issues' },
];

const faqs = [
  { id: 1, question: 'How can I hire a housemaid/babysitter/cook from HelperHub?',
   answer: '1: Choose your desired service, fill in your requirements and make a booking on our platform.2: Confirm your requirements with the relationship manager assigned to you.3: Sit tight while our relationship manager finds the right fit for your home.' },
  { id: 2, question: 'What if I’m not satisfied with the services?', answer: 'While all our helpers undergo an intensive assessment regime before being certified as a Helper, we still believe that there’s always room for improvement. In order to ensure that you obtain the optimum fit for your home, we provide an ‘complimentary replacement policy’ as part of your subscription. Just reach out to your relationship manager or mail us at HelperHub.com' },
  { id: 3, question: 'Why do your services seem more expensive than other helpers in the market?', answer: 'Unlike maid services/agencies we don’t charge a hefty commission fee from our clients, just a nominal booking amount. The entire wage as estimated by our wage estimation matrix(based on the Minimum Wages Act Of 1948) is paid in full to the helper.' },
  // Add more FAQs as needed
];
const Home = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeStep]);

  // const handleNext = () => {
  //   setActiveStep((prevStep) => (prevStep + 1) % items.length);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevStep) => (prevStep - 1 + items.length) % items.length);
  // };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>
        {items[activeStep].content}

        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" style={{ color: 'black', marginBottom: '7%', fontWeight: 'bold' }}>
            What are you looking for?
          </Typography>

          <Box
            style={{
              position: 'relative',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '10px',
              borderRadius: '25px', // Adjust this value to control the roundness
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white background
              border: '1px solid black', // Add border for visual separation
              width: '80%',
              marginLeft: '6%',
            }}
          >
            <IconButton
              style={{
                marginRight: '10px',
                padding: '8px',
                color: 'black', // Adjust alpha value for consistency
              }}
              color="primary"
            >
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search..."
              color='black'
              style={{
                flex: 1,
                fontSize: '1.5em',
                border: 'none', // Remove input border
                outline: 'none', // Remove input outline
                backgroundColor: 'transparent', // Make input background transparent
                color: 'black', // Adjust alpha value for consistency
              }}
            />
          </Box>
        </Box>

        <Box
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            textAlign: 'left',
            color: 'white',
            maxWidth: '300px', // Adjust the width as needed
          }}
        >
          <Typography variant="h5" style={{ color: 'black', fontWeight: 'bold' }}>
            "Bringing comfort home"
          </Typography>
          <Typography style={{ color: 'black', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            Your trusted partner for seamless service
          </Typography>
        </Box>
      </div>

      {/* Our Featured Services Section */}
      <Box
        style={{
          position: 'relative',
          textAlign: 'center',
          marginTop: '20px', // Adjust the spacing
        }}
      >
        <Typography variant="h4" style={{ color: 'black', marginBottom: '1%', fontWeight: 'bold' }}>
          Our Featured Services
        </Typography>
        <Typography variant="h6" style={{ color: 'black', marginBottom: '1%', fontWeight: 'bold' }}>
        Hire professionals,Experienced specifically for your needs
        </Typography>
        {/* Cards Section */}
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
             // Adjust the gap between cards
          }}
        >
          {featuredServices.map(service => (
            <Card key={service.id} style={{ width: '200px' }}>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
                style={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="div" style={{ color: 'black', fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>


  <Typography variant="h4" style={{ color: 'black', marginBottom: '1%', fontWeight: 'bold', marginTop: '20px' }}>
  Why Choose Us
</Typography>
<Box
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    border: 'none',
    marginBottom: '20px',
    flexWrap: 'wrap',
  }}
>
  {whyChooseUs.map(item => (
    <Card key={item.id} style={{ width: '100%', maxWidth: '300px', border: 'none', marginBottom: '20px' }}>
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        style={{ objectFit: 'contain', height: '150px' }}
      />
      <CardContent>
        <Box style={{ textAlign: 'center', border: 'none' }}>{/* item.icon */}</Box>
        <Typography variant="h6" component="div" style={{ color: 'black', fontWeight: 'bold' }}>
          {item.title}
        </Typography>
        <Typography style={{ color: 'black' }}>{item.description}</Typography>
      </CardContent>
    </Card>
  ))}
</Box>
</Box>

<Container>
      <Box
        style={{
          position: 'relative',
          textAlign: 'center',
          marginTop: '20px',
          marginBottom:'20px',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="h4" style={{ color: 'black', marginBottom: '1%', fontWeight: 'bold' }}>
          FAQs
        </Typography>

        {/* Accordion Section */}
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {faqs.map((faq) => (
            <Accordion key={faq.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-content-${faq.id}`}
                id={`faq-header-${faq.id}`}
              >
                <Typography variant="h6" style={{ color: 'black', fontWeight: 'bold' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: 'black' }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
      </Container>

    </div>
  );
};

export default Home;