import { useLocation } from "react-router-dom";

import { AppBar, Box, Toolbar } from "@mui/material";

import { ReactComponent as DesusLogo } from "../../img/desusLogo/desus.svg";
import { NavbarLinks } from "./NavbarLinks";
import { useTheme } from "@emotion/react";

import { NavbarMobileButtons } from "./NavbarMobileButtons";

const logoStyle = {
	height: "100%",
	width: "100%",
};

let routeLogin = false;

export const Navbar = ({ toggleDrawer, isDrawerOpen }) => {
	const theme = useTheme();
	let location = useLocation();
	
	if(location.pathname === '/clientes'){
		routeLogin = true;
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="relative"
				sx={{
					zIndex: (theme) => theme.zIndex.drawer + 1,
					boxShadow: "0px 4px 50px -20px #FBC837",
				}}
			>
				<Toolbar
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: 0,
						background: theme.palette.primary.main,
						boxShadow: "0px 4px 50px -20px #FBC837",
					}}
				>
					<Box
						sx={{
							width: { xs: "95%", lg: "70%" },
						}}
						display="flex"
						alignItems="center"
						justifyContent={ routeLogin ? 'center' : 'space-between' }
					>
						<Box
							sx={{
								height: { xs: "50px", lg: "74px" },
								width: { xs: "80px", lg: "127px" },
								ml: `${ routeLogin ? '110px' : '' }`
							}}
						>
							<DesusLogo style={logoStyle} />
						</Box>

						{/* //! MENU NAVBAR DESKTOP  */}
						<NavbarLinks />

						{/* //! BOTONES NAVBAR MOBILE */}
						<NavbarMobileButtons
							isDrawerOpen={isDrawerOpen}
							toggleDrawer={toggleDrawer}
						/>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
