import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import imgDiscount from '../../img/Offers/discount.png';
import imgWebDesign from '../../img/Offers/webDesign.png';

const cardDesign = {
  widht: { lg: '862px', md: '780px', xs: '296px' }, height: { md: '200px', xs: '456px'},
  background: 'rgba(215, 236, 250, 1)',
  border: '2px solid #051622',
  borderRadius: '25px',
  ml: { lg: 0, md: 0 }
}

const typoDesign = {
  width: { lg: '527px', md: '510px'},
  color: '#000',
  fontSize: '16px', fontWeight: 600, lineHeight: '200%',
}

const images = {
  width: { md: '140px', xs: '100px'}, 
  height: { md: '140px', xs: '100px'}
}

export default function MiniCard() {
  return (
    <Box>
      <Card 
        sx={{ 
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          width: cardDesign.widht, height: cardDesign.height,
          background: cardDesign.background,
          border: cardDesign.border, borderRadius: cardDesign.borderRadius,
          mb: 3,
          //ml: cardDesign.ml
        }}
      >
        <CardContent
          sx={{
            display: 'flex', flexDirection: { sm: 'row', xs:'column' },
            mt: { lg: 1.8, md: 1.5}
          }}
        >
          <Typography 
            sx={{
              width: typoDesign.width,
              color: typoDesign.color,
              fontSize: typoDesign.fontSize, fontWeight: typoDesign.fontWeight, 
              lineHeight: typoDesign.lineHeight
            }}
            variant='body1'
          >
            Descubre Landing, tu puerta de entrada al paraíso web completo. 
            Te ofrecemos un paquete integral que incluye el diseño, desarrollo y publicación 
            de tu sitio web, junto con el dominio, hosting y certificado SSL. 
            Todo esto por solo <span style={{ color: 'rgba(6, 122, 204, 1)' }}>3.000 pesos argentinos al mes.</span>
          </Typography>
          <CardMedia
            sx={{ 
              width: images.width, height: images.height, 
              mt: { lg: 0, md: 0.5 },
              ml: { lg: 7, md: 6 },
              mx: { xs: 'auto' }
            }}
            image= { imgWebDesign }
            title="Discount"
          />
        </CardContent>
      </Card>
      
      <Card 
        sx={{ 
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          width: cardDesign.widht, height: cardDesign.height,
          background: cardDesign.background,
          border: cardDesign.border, borderRadius: cardDesign.borderRadius
        }}
      >
        <CardContent 
          sx={{
            display: 'flex', flexDirection: { sm: 'row', xs:'column' }, 
            mt: 1
          }}
        >
          <CardMedia
            sx={{ 
              width: images.width, height: images.height, 
              mt: 1.3, mr: 6 
            }}
            image= { imgDiscount }
            title="Web Design"
          />
          <Typography
            sx={{
              width: typoDesign.width, color: typoDesign.color,
              fontSize: typoDesign.fontSize, fontWeight: typoDesign.fontWeight, 
              lineHeight: typoDesign.lineHeight
            }} 
            variant='body1'
          >
            Pero eso no es todo. Si eres una de las primeras 10 personas en aprovechar esta 
            oferta y te registras en nuestra web, podrás asegurarte este paquete completo a 
            un precio inigualable. Y si decides pagar de manera anual en un solo pago, 
            aún obtendrás un descuento especial de 30.000 pesos argentinos. 
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}