import { Typography } from "@mui/material";
import React from "react";

export const ServicesCardTitle = ({
	title,
	color = "#fff",
	borderRight ,
}) => {
	return (
		<Typography
			sx={{
				fontSize: { xs: 24, lg: 32 },
				fontWeight: 500,
				fontFamily: "Space Grotesk",
				textAlign: "center",
				color,
				paddingRight: { lg: "1.6rem" },
				borderRight: { lg: borderRight },
			}}
		>
			{title}
		</Typography>
	);
};
