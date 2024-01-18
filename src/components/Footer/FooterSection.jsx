import { Box, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const FooterSection = () => {
	return (
		<Box
			id="contacto"
			position="relative"
			sx={{
				minHeight: { xs: 90, lg: 120 },
				background: "#051622",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				mt: 13
			}}
		>
			<Typography
				sx={{
					display: 'flex',
					color: "#fff",
					fontSize: { lg: 21, xs: 12 },
					fontWeight: { xs: 400, lg: 500 },
					fontFamily: "Red Hat Display",
					mt: { lg: 3, xs: 2}
				}}
			>
				© 2023 by DesusWeb www.desusweb.com
				<Box sx={{ mt: { lg: -1, xs: -0.2 }, ml: { lg: 2, xs: 0.8 }, fontSize: { lg: '40px', xs: '18px'} }}>
					<FacebookIcon fontSize="inherit"/> <InstagramIcon fontSize="inherit"/>
				</Box>
			</Typography>
		</Box>
	);
};
