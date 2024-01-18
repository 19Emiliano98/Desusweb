import { Box, Card, CardContent, CardMedia, Divider } from "@mui/material";
import { Link } from "@mui/material";
import {
	ServicesCardText,
	/* ServicesCardButton, */
	ServicesCardSubtitle,
	ServicesCardTitle,
} from "./";
import Button from '../Button.jsx'

export const ServicesCard = ({
	service,
	color = "#fff",
	minHeightXS = 537,
	minHeightSM = 400,
	minHeightLG = 550,
	cardContainerMinHeightXS = 572,
	cardContainerMinHeightSM = 450,
	cardContainerMinHeightLG = 595,
	cardContainerMinWidthLG = 1275,
	borderRight = "2px solid #fff",
	positionLeftLG,
	positionRightLG,
}) => {
	return (
		// {/* //!CARD */}
		<Box
			sx={{
				minHeight: {
					xs: cardContainerMinHeightXS,
					sm: cardContainerMinHeightSM,
					lg: cardContainerMinHeightLG,
				},
				minWidth: { xs: 328, lg: cardContainerMinWidthLG },
				position: "relative",
				display: "flex",
				alignItems: "end",
				justifyContent: { xs: "center", lg: "center" },
				"&:first-of-type": {
					marginTop: { lg: '-54px' },
				},
				"&:not(:first-of-type)": {
					marginTop: { xl: '21px', lg: "2.6rem", xs: "3rem" },
				},
			}}
		>
			{/* //! ICONO */}
			<Box
				sx={{
					position: "absolute",
					top: { xs: 0 },
					left: { lg: positionLeftLG },
					right: { lg: positionRightLG },
				}}
			>
			{/* //! Card decorativa superior */}
				<Card
					sx={{
						background: "#FB9039",
						border: "4px solid #000",
						borderRadius: "100%",
						height: { xs: 70 },
						width: { xs: 70 },
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						boxShadow: "6px 6px 5px -2px #24293880, 3px 3px 0 0 #000"
					}}
				>
					<CardMedia
						component="img"
						image={service.icon}
						sx={{ height: { xs: 27 }, width: { xs: 27 } }}
					/>
				</Card>
			</Box>
			{/* //! Card de cuerpo principal */}
			<Card
				sx={{
					background: `${service.background}`,
					minHeight: { xs: minHeightXS, sm: minHeightSM, lg: minHeightLG },
					width: { xs: 300, sm: '80%', lg: 1236 },
					border: "2px solid #051622",
					borderRadius: "25px",
					boxShadow: "10px 10px 15px -5px #0516227f, 6px 6px 0 0 #191919"
				}}
			>
				<CardContent
					sx={{
						marginTop: "1.75rem",
						maxWidth: { xs: 'unset', lg: 1236 },
					}}
				>
					<Box
						sx={{
							display: { lg: "flex" },
							padding: { lg: "0 4.6rem" },
							alignItems: { lg: "center" },
						}}
					>
						{/* //! TITULO */}
						<ServicesCardTitle
							title={service.title}
							color={color}
							borderRight={borderRight}
						/>

						{/* //! SUBTITULO */}
						<ServicesCardSubtitle subtitle={service.subtitle} color={color} />
					</Box>

					<Divider
						sx={{
							width: 64,
							margin: "1rem auto",
							border: `1px solid ${color}`,
							display: { lg: "none" },
						}}
					/>
					{/* //! TEXTO */}
					<ServicesCardText
						textMobile={service.textMobile}
						textDesktop={service.textDesktop}
						color={color}
					/>
				</CardContent>

				<Box
					sx={{
						flex: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						mt: { lg: 0, md: 6, sm: 3, xs: 0 },
						mb: { lg: 0, md: 3, sm: 3, xs: 0 }
					}}
				>
					{/* //! CTA BOTON */}
					<Link href="#contacto"> {/* //* Utilizo Link para que haga el efecto de desliz al bajar */}
						<Button buttonContent={'Contáctanos'}/>
					</Link>
				</Box>
			</Card>
		</Box>
	);
};