import * as React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// se puede poner el contenido del string llamando al componente desde el padre, para hacerlo dinamico
export default function BasicButtons(param) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  let breakpointsButton = {}

  if( matches === true ){
    breakpointsButton = {
      width: '400px'
    }
  } else {
    breakpointsButton = {
      width: '296px'
    }
  }

  const BootstrapButton = styled(Button)({
    width: breakpointsButton.width, height: '70px',
    border: '2px solid #000000', borderRadius: '50px',
    boxShadow: '5px 5px 0px #000000, 10px 12px 55px -20px #FBC837',
    textTransform: 'none',
    backgroundColor: '#FBC837',
    color: 'black',
    fontFamily: [ 'Red Hat Display' ].join(','),
    fontSize: '25px',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#e3b332',
      boxShadow: '5px 5px 0px #000000, 10px 12px 55px -20px #FBC837',
    },
    '&:disabled': {
      backgroundColor: '#ac8e3d',
      boxShadow: '5px 5px 0px #000000, 10px 12px 55px -20px #FBC837',
      opacity: '70%'
    }
  });

  return (
    <Stack>
      
        <BootstrapButton type='submit' disabled={param.disable} variant="contained">
          {param.buttonContent}
        </BootstrapButton>
      
    </Stack>
  );
}