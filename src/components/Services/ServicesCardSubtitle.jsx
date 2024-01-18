import { Typography } from "@mui/material";

export const ServicesCardSubtitle = ({ subtitle, color = "#fff" }) => {
	return (
		<Typography
			sx={{
				fontSize: { xs: 18, lg: 24 },
				fontWeight: 400,
				fontFamily: "Red Hat Display",
				textAlign: { xs: "center", lg: "unset" },
				color,
				padding: { xs: "0 1rem", lg: 0 },
				marginTop: { xs: "1rem", lg: "0.3rem" },
				paddingLeft: { lg: "1.6rem" },
			}}
		>
			{subtitle}
		</Typography>
	);
};
