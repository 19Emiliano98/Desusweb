import { useLocation } from "react-router-dom";
import { Box, Link } from "@mui/material";

let routeOffer = false;
let routeLogin = false;

const linkStyle = {
	textDecoration: "none",
	padding: "0 1rem",
	fontFamily: "Space Grotesk",
	fontWeight: "600",
	fontSize: "32",
	color: "#051622",
	transform: "translate(0)",
	transition: "all 250ms ease-in-out",
};
export const NavbarLinks = () => {
	let location = useLocation();

	if(location.pathname === '/form'){
		routeOffer = true;
	} else if(location.pathname === '/clientes'){
		routeLogin = true;
	}

	return (
		<Box
			sx={{
				display: { xs: "none", lg: "flex" },
				alignItems: "center",
				justifyContent: "center",
				height: "5rem",
			}}
		>
			<Link sx={linkStyle} className="hover-links" href={ routeOffer ? 'http://localhost:3000/inicio' : '#inicio' }>
				{ routeLogin ? '' : 'Inicio'}
			</Link>
			<Link sx={linkStyle} className="hover-links" href='#servicios'>
				{ routeOffer || routeLogin ? '' : 'Servicios'}
			</Link>
			<Link sx={linkStyle} className="hover-links" href='#clientes'>
				{ routeOffer || routeLogin ? '' : 'Clientes'}
			</Link>
			<Link sx={linkStyle} className="hover-links" href='#contacto'>
				{ routeOffer || routeLogin ? '' : 'Contacto'}
			</Link>
		</Box>
	);
};
