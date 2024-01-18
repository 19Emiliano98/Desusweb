import { useLocation } from "react-router-dom";
import { Box, Drawer, Link, ListItem, Toolbar } from "@mui/material";

let presentRoute = false;

export const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
	let location = useLocation();

	if(location.pathname === '/form'){
		presentRoute = true;
	}

	const list = (anchor) => (
		<>
			<Toolbar  sx={{ background: "#FBC837 !important" }} />

			<Box
				sx={{
					width:
						anchor === "top" || anchor === "bottom"
							? "auto"
							: window.innerWidth,
					background: "#FBC837",
					height: "100%",
					border: "4px solid #000",
				}}
				onClick={toggleDrawer(false)}
				onKeyDown={toggleDrawer(false)}
			>
				{["Inicio", "Servicios", "Clientes", "Contacto"].map((text, index) => (
					<ListItem
						key={text}
						sx={{
							marginTop: "2.5rem",
							width: "100%",
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "flex-end",
						}}
					>
						<Box sx={{ width: "50%" }}>
							
							<Link
								href={`${ presentRoute ? 'http://localhost:3000/inicio' : `#${text.toLowerCase()}`}`}
								onClick={toggleDrawer(false)}
								onKeyDown={toggleDrawer(false)}
								sx={{
									color: "#051622",
									fontWeight: "600",
									fontSize: 32,
									fontFamily: "Space Grotesk",
									width: "100%",
									textAlign: "right",
									"&:hover": { textDecoration: "none" },
								}}
							>
								{text}
							</Link>
						</Box>
					</ListItem>
				))}
			</Box>
		</>
	);

	return (
		<Drawer
			anchor="right"
			open={isDrawerOpen.right}
			onClose={toggleDrawer(false)}
		>
			{list(isDrawerOpen.right)}
		</Drawer>
	);
};