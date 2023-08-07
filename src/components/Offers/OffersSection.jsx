import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import MiniCard from './MiniCard.jsx';
import Button from '../Button.jsx';
import imgError from '../../img/Offers/error.png';

const palettes = createTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  },
});

export default function OffersSection() {
  return (
    <Box
      position="relative"
      sx={{ 
        display: 'flex', justifyContent: 'center',
        background: "#1c1c1c",
				height: { lg: 1220, md: 1222, xs: 1720 }, mb: 42
      }}
    >
      {/* //! Card Principal */}
      <Card 
        sx={{ 
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          width: { lg: '1160px', md: '920px', xs: '95%' }, height: { md: '1368px', xs: '1955px' },
          background: '#FFF',
          border: '2px solid #051622', borderRadius: '25px',
          boxShadow: '10px 10px 15px -5px rgba(5, 22, 34, 0.50), 6px 6px 0px 0px #191919',
          mt: '40px', mb: 25
        }}
      >
        <CardContent
          sx={{
            display: 'flex', alignItems: 'center',
            flexDirection: { sm: 'row', xs:'column' },
            mt: '16px'
          }}
        >
          <CardMedia
            sx={{ width: {md:'48px', xs: '32px'}, height: {md:'48px', xs: '32px'} }}
            image= { imgError }
            title="Error Alert"
          />
          <Typography
            sx={{
              fontFamily: 'Space Grotesk', fontSize: { md:'44px', xs: '24px' }, fontStyle: 'normal',
              fontWeight: 500, lineHeight: '150%',
              color: 'rgba(25, 25, 25, 1)'
            }}
            variant='h2'
          >
            ¡OPORTUNIDAD UNICA!
          </Typography>
        </CardContent>
        
        {/* //! Texto de Titulo */}
        <CardContent
          sx={{ mb: { md: 0, xs: 4 } }}
        >
          <Typography 
            sx={{
              width: {md:'762px', xs: '280px'}, height: '96px', flexShrink: 0,
              color: '#000',
              fontFamily: 'Red Hat Display', fontSize: {md:'21px', xs: '15px'}, fontStyle: 'normal',
              fontWeight: 600, lineHeight: '170%',
              textAlign: 'center'
            }} 
            variant='h3'
            >
            ¡Atención a todos los interesados en Landing! Tenemos una promoción 
            exclusiva que no querrás dejar pasar. Pero apresúrate, ¡ es solo para 
            las <span style={{ color: 'rgba(6, 122, 204, 1)' }}>10 primeras personas que se anoten en nuestra web !</span>
          </Typography>
        </CardContent>
        
        {/* //! Cards de las promos de interior */}
        <MiniCard />
        
        <Typography
          sx={{
            width: { md: '765px', xs: '300px'}, height: '61px', flexShrink: 0,
            color: 'rgba(6, 122, 204, 1)',
            fontFamily: 'Red Hat Display', fontSize: { md:'21px', xs: '18px' }, fontStyle: 'normal',
            fontWeight: 700, lineHeight: '170%',
            mt: 4 , mb: { md: 8, xs: 11 }, textAlign: { md: 'center', xs: 'left' },
          }}
        >
          Completa el formulario a continuación para que podamos contactarte y <br />
          reservar tu lugar en esta promoción exclusiva:
        </Typography>
        
        <ThemeProvider theme={palettes}>
          <Box
            component="form"
            sx={{
              background:"#fff",
              '& .MuiTextField-root': { m: '0px 0px 24px 0px', width: { md: '765px', xs: '300px' }, height: '48px' }
            }}
            autoComplete="off"
          >
            <Box
            sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}
          >
              <TextField
                required
                id="nombreOffer"
                label="Nombre"
              />
              <TextField
                required
                id="apellidoOffer"
                label="Apellido"
              />
              <TextField
                required
                id="emailOffer"
                label="Correo electrónico"
              />
              <TextField
                required
                id="phoneOffer"
                label="Teléfono"
                type='number'
              />
              <TextField
                id="webSiteOffer"
                label="Sitio web actual (si tienes)"
              />
            </Box>
            <Typography
              sx={{
                color: '#000',
                fontFamily: 'Red Hat Display', fontSize: '16px', fontStyle: 'normal',
                fontWeight: 600, lineHeight: '200%'
              }}
            >
              *Campos obligatorios
            </Typography>
          </Box>
          
          {/* //! BOTON */}
          <CardActions sx={{ mt: 5 }}>
            <Button buttonContent={'Enviar'}/>
          </CardActions>
        </ThemeProvider>
      </Card>
    </Box>
  );
}