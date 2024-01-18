import { Box, Typography } from "@mui/material";
import { ReactComponent as BlueCheckIcon } from "../../img/blueCheck.svg";

export const ServicesTitle = () => {
	return (
		<Box
			sx={{
				textAlign: "center",
				padding: { xs: "0.75rem 0 0.75rem 0", lg: "3rem 0" },
			}}
		>
			<Typography
				component="h2"
				sx={{
					fontSize: { lg: '41px' },
					fontWeight: 500,
					fontFamily: "Space Grotesk",
					color: "#000",
					mt: { lg: '-15px', xs: '10px' }
				}}
			>
				Nuestros servicios:
			</Typography>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					ml: 2, mt: 1.5
				}}
			>
				<Typography
					component="span"
					sx={{
						height: { xs: 27, lg: 41 },
						width: { xs: 22, lg: 44 },
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginRight: { xs: "0.5rem", lg: "unset" },
					}}
				>
					<BlueCheckIcon />
				</Typography>
				<Typography
					variant="body"
					sx={{
						fontSize: { xl: 19, lg: 24, xs: 15 },
						fontWeight: { xl: 1000, lg: 400, xs: 700 },
						fontFamily: "Red Hat Display",
						textAlign: { xs: "left", lg: "unset" },
					}}
				>
					Todos nuestros servicios incluyen dominio, hosting y certificado SSL
					<Typography
						variant="body"
						component="span"
						sx={{
							color: "#067ACC",
							fontSize: { xl: 19, lg: 24, xs: 16 },
							fontWeight: "700",
							fontFamily: "Red Hat Display",
						}}
					>
						{" "}
						GRATIS
					</Typography>
				</Typography>
			</Box>
		</Box>
	);
};
