import { Box, Typography } from "@mui/material";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled } from '@mui/system';

import { Link } from "@mui/material";
import titleImage from '../../img/titleImage.png';
import CardMedia from '@mui/material/CardMedia';
import TitleSlider from './TitleAnimation.jsx';
import Button from '../Button.jsx';
import LenguajeCards from '../LanguagesCards.jsx';

const AnimatedArrowDownwardIcon = styled(ArrowDownwardIcon)({
  animation: 'bounce 1.5s infinite',
  '@keyframes bounce': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(15px)',
    },
  },
});

export const HomeSection = () => {
	
	return (
		<Box
			id="inicio"
			position="relative"
			sx={{
				//minHeight: { lg: 1636, xs: 1440 },
				display: 'flex', flexDirection: 'column',
				background: "#1c1c1c",
				height: { xl: 1150, lg: 1050, md: 950, xs: 975 },
				//padding: { xs: "0 1rem", lg: 0 }, //Propiedad de lucas que me rompia la ubicacion del primer fondo blanco
				boxShadow: "0 0 20 0 #23232333, 0 8px 20px 0 #23232333"
			}}
		>
		{/* // !! HomeImage */}
		<Box 
				sx={{
					display: 'flex', justifyContent: 'center',
					position: { md: "absolute", xs: 'relative' },
					mt: { xl:'8%', lg: '8%', md: '13%', xs: '15px' },
					ml: { lg: '58%', md: '59%', xs: '0%' }
				}}
			>
				<CardMedia
					sx={{ width: { lg: '490px', md: '370px', xs: '225px' } }}
					component="img"
					image={titleImage}
					alt={titleImage}
				/>
			</Box>
		{/* // !! Title whit Typewritter and button */}
			<Box
				sx={{
					display: 'flex', justifyContent: 'center',
					mt: { xl: '15%', lg: '16%', md: '22%', xs: '35px' },
					ml: { xl: '-41%', lg: '-44%', md: '-52%', xs: '-10%' },
				}}
			>
				<Typography 
					sx={{
						color: '#fff',
						fontSize: { lg:'3.75rem', md:'2.75rem', xs: '1.6rem' }, fontFamily: 'Space Grotesk'
					}}
					variant="h1"
				>
					Bienvenid@ a tu <br/>próximo <TitleSlider />
				</Typography>
			</Box>
			{/* // !! Button */}
			<Box 
				sx={{
					display: 'flex', justifyContent: 'center',
					ml: { xl: '-38%', lg: '-38%', md: '-43%' },
					mt: { xl: 10, md: 8, xs: '90px' },
					mb: { xl: -2, lg: -7.5 }
				}}
			>
				<Link href="#contacto"> {/* //* Utilizo Link para que haga el efecto de desliz al bajar */}
					<Button buttonContent={'Contáctanos'}/>
				</Link>
			</Box>
			
			<Box
				sx={{
					display: 'flex', alignItems: 'center', flexDirection: 'column',
					mt: { xl: 27, lg: 30, md: 16, xs: '14vh' },
					color: '#fff'
				}}
			>
			{/* // !! Scroll */}
				<Typography>Scroll</Typography>
				<Box sx={{ color: '#FBC837' }}> <AnimatedArrowDownwardIcon /> </Box>
				<Box sx={{ borderBottom: 'solid 2px gray', color: '#444444', opacity: 0.3, width: '75%', mt: 2 }}>.</Box>
			</Box>
			{/* // !! Lenguaje Cards */}
				<Box
					sx={{
						display: 'flex', justifyContent: 'center',
						width: { xl: '70%', md: '80%', sm: '80%',xs: '79.9%' },
						margin: { lg: '5vh auto 0vh auto', md: '5vh auto 0vh auto', sm: '4.5vh auto 0vh auto', xs: '0.7rem auto 0rem auto' },
						zIndex: 1
					}}
				>
					<LenguajeCards />
				
				</Box>
			</Box>
	);
};
