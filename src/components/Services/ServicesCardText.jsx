import { Box, Typography } from "@mui/material";

export const ServicesCardText = ({
	textMobile,
	textDesktop,
	color = "#fff",
}) => {
	return (
		<Box
			sx={{
				padding: { xs: "unset", lg: "0 4.6rem" },
				marginTop: { lg: "2rem" },
				marginBottom: { lg: "1.25rem" },

			}}
		>
			<Typography
				sx={{
					fontSize: 18,
					fontWeight: 400,
					fontFamily: "Red Hat Display",
					color,
					padding: "0 .5rem",
					display: { lg: "none" },
				}}
			>
				{textMobile}
			</Typography>
			<Typography
				sx={{
					fontSize: '21px',
					fontWeight: 600,
					fontFamily: "Red Hat Display",
					lineHeight: "3.125rem",
					color,
					display: { xs: "none", lg: "unset" },
				}}
			>
				{textDesktop}
			</Typography>
		</Box>
	);
};
