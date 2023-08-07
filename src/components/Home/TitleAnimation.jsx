import React from 'react'
import Typewriter from 'typewriter-effect';

import { Box } from "@mui/material";

const TitleSlider = () => {
  return (
    <Box
      sx={{
        color: '#FF9B4A',
        position: 'absolute',
        mt: { xl: -8.7, lg: -8.7, md: -6.4, xs: '-30px' }, ml: { xl: 31.5, lg: 31, md: 23, xs: '107px' }
      }}
    >
      <Typewriter
        options={{
          strings: [ 'Desarrollo', 'Sitio', 'Negocio', 'Proyecto', 'E-commerce' ],
          autoStart: true,
          loop: true,
          delay: 200,
          deleteSpeed: 120
        }}
      />
      
    </Box>
  )
}

export default TitleSlider