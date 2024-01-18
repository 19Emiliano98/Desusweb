import { Link } from "@mui/material";

export const ServicesCardButton = () => {
	return (
		<Link
			href="#contacto"
			sx={{
				background: "#FBC837",
				boxShadow: {
					xs: "4px 4px 20px -10px #051622, 3px 3px 0 0 #000",
					lg: "6px 6px 25px -2px #051622, 6px 6px 0 0 #000 ",
				},
				border: "2px solid #000",
				borderRadius: "50px",
				height: { xs: 64 },
				width: { xs: 296 },
				color: "#000",
				fontFamily: [ 'Red Hat Display' ].join(','),
				fontWeight: 800,
				fontSize: { xs: 21, lg: 28 },
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textDecoration: 'none'
			}}
		>
			Consultar
		</Link>
	);
};
