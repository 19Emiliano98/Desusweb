import * as React from 'react';
import { useState } from 'react';

import { Box, Card, CardActions, CardContent, Typography, TextField } from '@mui/material';
import Button from '../Button.jsx';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const palettes = createTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  },
});

let hasContent = true;

export default function LoginSection() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  if( email && pass !== "" ){
    hasContent = false;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const peticion = {
      email: email,
      password: pass
    }

    console.log(peticion);
  }

  return (
    <Box
    sx={{
      display: 'flex', alignItems: 'center', flexDirection: 'column',
      height: '690px',
      mb: 5.15,
      backgroundColor: '#1C1C1C',
      '& .MuiTextField-root': {
        width: '493.573px'
      }
    }}
    >
      {/* //! Titulo de la Section*/}
      <Typography 
        sx={{
          fontFamily: 'Space Grotesk', fontStyle: 'normal',
          fontWeight: 500, lineHeight: '150%',
          fontSize: '44px',
          color: '#FFF',
          mt: 8, mb: 7
        }}
      >
        Panel de autogestión
      </Typography>
      
      <Card 
        sx={{
          display: 'flex', alignItems: 'center',
          flexDirection: 'column', textAlign: 'center',
          width: '564px',
          height: '432px',
          flexShrink: 0,
          borderRadius: '25px',
          border: '2px solid #051622',
          background: '#FFF',
          boxShadow: '10px 10px 15px -5px rgba(5, 22, 34, 0.50), 6px 6px 0px 0px #191919'
        }}
      >
        <CardContent>
          {/* //! Titulo */}
          <Typography 
            sx={{
              fontFamily: 'Space Grotesk',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 500,
              color: '#000',
              lineHeight: '150%',
              mt: 1.5, mb: 4
            }}
            variant="body1"
          >
            Ingresá tus datos
          </Typography>
          
          {/* //! Ingreso de datos */}
          <ThemeProvider theme={palettes}>
            <Box
              component='form'
              onSubmit={ handleSubmit }
              noValidate
              autoComplete="off"
              sx={{
                display: 'flex', flexDirection: 'column',
                gap: '25px'
              }}
            >
              <TextField
                label="Usuario o correo electrónico"
                value={ email }
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Contraseña"
                type='password'
                value={ pass }
                onChange={(e) => setPass(e.target.value)}
              />

              <Typography 
              sx={{
                color: '#000',
                fontFamily: 'Red Hat Display',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '150%'
              }}
              variant="body2"
              >
                Olvidé mis datos
              </Typography>
              <CardActions
                sx={{
                  display: 'flex', justifyContent: 'center'
                }}
              >
                <Button buttonContent={'Ingresar'} disable={hasContent}/>
              </CardActions>
            </Box>
          </ThemeProvider>
        </CardContent>
      </Card>
    </Box>
  );
}