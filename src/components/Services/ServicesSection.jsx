import { Box } from "@mui/material";
import { ServicesTitle } from "./ServicesTitle";
import { ServicesCard } from "./ServicesCard";
import { desarrolloLibre, landingPage, tiendaOnline } from "./services";

export const ServicesSection = () => {
	return (
		<Box
			id="servicios"
			position="relative"
			sx={{
				minHeight: { lg: 2206, xs: 2100 },
				mt: { lg: '58vh', xs: '200px' }
			}}
		>
			<Box
				sx={{
					background: "#fbc837",
					mt: {xl: '-190px', lg: '-250px', md: '320px' },
					height: { xl: 1920, lg: 2040, sm: 1400, xs: 1800 },
					padding: { xs: "0 1rem", lg: 0 },
					boxShadow: "0 0 20 0 #23232333, 0 8px 20px 0 #23232333",
				}}
			>
				<ServicesTitle />
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<ServicesCard
						service={tiendaOnline}
						color="#191919"
						borderRight="2px solid #191919"
						positionRightLG={0}
					/>
					<ServicesCard
						service={landingPage}
						minHeightXS={544}
						minHeightLG={600}
						cardContainerMinHeightXS={579}
						cardContainerMinHeightLG={650}
						cardContainerMinWidthLG={1287}
						positionLeftLG={0}
					/>
					<ServicesCard
						service={desarrolloLibre}
						minHeightXS={594}
						cardContainerMinHeightXS={629}
						minHeightLG={566}
						cardContainerMinHeightLG={610}
						positionRightLG={0}
					/>
				</Box>
			</Box>
		</Box>
	);
};
