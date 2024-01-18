import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
export const NavbarMobileButtons = ({ isDrawerOpen, toggleDrawer }) => {
	return (
		<Box
			sx={{
				display: { xs: "flex", lg: "none" },
				alignItems: "center",
				justifyContent: "center",
				marginRight: { xs: "1rem", lg: 0 },
			}}
		>
			{isDrawerOpen.right ? (
				<CloseIcon
					sx={{ height: { xs: 32 }, width: { xs: 32 } }}
					onClick={toggleDrawer(false)}
				/>
			) : (
				<MenuIcon
					sx={{ height: { xs: 32 }, width: { xs: 32 } }}
					onClick={toggleDrawer(true)}
				/>
			)}
		</Box>
	);
};
