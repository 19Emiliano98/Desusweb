import * as React from 'react';

import cssImg from '../img/languagesCards/css.png';
import dockerImg from '../img/languagesCards/docker.png';
import figmaImg from '../img/languagesCards/figma.png';
import htmlImg from '../img/languagesCards/html.png';
import jsImg from '../img/languagesCards/js.png';
import phpImg from '../img/languagesCards/php.png';
import reactImg from '../img/languagesCards/reactDark.png';
import symfonyImg from '../img/languagesCards/symfony.png';

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const repeater = [ reactImg, figmaImg, cssImg, htmlImg, dockerImg, jsImg, phpImg, symfonyImg ]

const card = (
  repeater.map( ( x, index ) => 
    <React.Fragment>
      <Card
        sx={{
          width: { lg: 200, md: 170, sm: 120, xs: '85px' }, height: { lg: 185, md: 170, sm: 120, xs: '85px' }, mr: { lg:'30px', md:'18px', sm:'14px', xs: '0px' }, mb: 5,
          borderRadius: '25px',
          backgroundColor: '#FBC837',
          border: '4px solid black',
          boxShadow: '8px 8px 0px #000000 , 10px 10px 15px -5px rgba(5, 22, 34, 0.5)' // tamanio del shadow alterado por emi
        }}
        key={index}
      >
        <CardContent>
          <CardMedia
            sx={{
              objectFit: 'contain', m: { xl:'15px auto 0px auto', lg:'15px auto 0px auto', md:'10px auto 0px auto', xs:'auto' },
              width:{ xl:"110px", md:"110px", sm:"80px", xs:"45px" },
              height:{ xl:"110px", md:"110px", sm:"80px", xs:"45px" }
            }}
            component="img"
            image={x}
            alt="React"
            />
        </CardContent>
      </Card>
    </React.Fragment>
  )
);

export default function LanguagesCards() {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column' }}>
      
      <Typography sx={{ mb: 3, color: '#F0F0F0', textAlign: 'center', fontSize: { lg: '41px', sm: '41px', xs: '30px' }, fontWeight: 500 }} variant="h2">
        Trabajamos con:
      </Typography>
      
      <Box 
        sx={{ 
        display: 'flex', justifyContent:'center',
        flexDirection:'row', flexWrap: 'wrap'
      }}>
        {card}
      </Box>
    </Box>
  );
}