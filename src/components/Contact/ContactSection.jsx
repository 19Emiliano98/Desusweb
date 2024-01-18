import { Box, Typography } from "@mui/material";
import Formulary from "../Formulary";

export const ContactSection = () => {
	return (
		<Box
			id="contacto"
			position="relative"
			sx={{
				minHeight: { xs: 850, lg: 870 },
				mt: { lg: 0, md: -16, sm: -36, xs: 0 }
			}}
		>
			<Box
				sx={{
					background: "#fbc837",
					height: { xs: 870, lg: 875 },
					padding: { xs: "0 1rem", lg: 0 },
					boxShadow: "0 0 20 0 #23232333, 0 8px 20px 0 #23232333",
				}}
			>
				<Box
					sx={{
						textAlign: "center",
						padding: "1.5rem 0",
					}}
				>
					<Typography
						component="h2"
						sx={{
							fontSize: { xs: 24, lg: 30 },
							fontWeight: 500,
							fontFamily: "Space Grotesk",
						}}
					>
						Contáctanos:
					</Typography>
				</Box>
					<Formulary />
			</Box>
		</Box>
	);
};
