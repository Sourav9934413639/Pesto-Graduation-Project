
import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Slider from './Slider'; 

const cardData = [
  {
    id: 1,
    title: 'Card 1',
    image: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/04/20/one-piece-zoro-in-wano-arc.jpeg',
  },
  {
    id: 2,
    title: 'Card 2',
    image: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/04/20/one-piece-zoro-in-wano-arc.jpeg',
  },
  {
    id: 3,
    title: 'Card 3',
    image: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/04/20/one-piece-zoro-in-wano-arc.jpeg',
  },
];

const sliderImageData = [
  {
    id: 1,
    image: 'https://images6.alphacoders.com/133/1331472.png',
    caption: 'Slider Image 1 iugo y87t 8otg8 ',
  },
  {
    id: 2,
    image: 'https://butwhytho.net/wp-content/uploads/2023/08/Roronoa-Zoro-But-Why-Tho-3.jpg',
    caption: 'Slider Image 2 iuguo8g 8g8og 8og',
  },
  {
    id: 3,
    image: 'https://qph.cf2.quoracdn.net/main-qimg-efadf16c3435324ce39bfcef44effd7c-lq',
    caption: 'Slider Image 3  7gtoggt7',
  },
];

const Pricing = () => {
  return (
    <Grid container spacing={1} style={{margin:1, overflow: 'hidden' }}>
      <Grid item xs={12} md={6}>
      <div style={{ maxHeight: '30rem', overflowY: 'auto' }}>
          <Grid container spacing={2}>
            {cardData.map((card) => (
              <Grid item xs={12} md={4} key={card.id}>
                <Card>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <CardContent style={{ textAlign: 'center', padding: '0' }}>
                    <Typography variant="h6" style={{ margin: 0, fontWeight: 'bold' }}>
                      {card.title}
                    </Typography>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: 'black',
                        color: 'white',
                        width: '90%',
                        marginBottom: '5%',
                        padding: '2% 0',
                      }}
                    >
                      View Pricing
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
        <Slider images={sliderImageData} />
          <CardContent>
            <Typography align='center'>
              This is additional content below the slider image card in the right section.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Pricing;