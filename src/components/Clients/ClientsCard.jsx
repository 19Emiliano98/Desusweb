import { Card, CardMedia } from "@mui/material";

export const ClientsCard = ({ heightWidthLG, heightWidthMD, heightWidthXS, borderRadius, clientImage }) => {
	return (
		<Card
			sx={{
				width: { lg: 410, md: 600, xs: 160 },
				height: { lg: 340, md: 300, xs: 160 },
				background: "#FBC837",
				margin: '0px 10px',
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				border: "2px solid #051622",
				borderRadius: "25px",
				boxShadow: "6px 6px 5px -2px #2429387f, 8px 8px 0 0 #000",
			}}
		>
			<CardMedia
				component="img"
				image={ clientImage }
				sx={{
					width: { xs: heightWidthXS.width, md:heightWidthMD.width, lg: heightWidthLG.width },
					height: { xs: heightWidthXS.height, md:heightWidthMD.height, lg: heightWidthLG.height },
					borderRadius: borderRadius
				}}
			/>
		</Card>
	);
};
