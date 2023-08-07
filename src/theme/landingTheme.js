import { createTheme } from "@mui/material";

export const landingTheme = createTheme({
	palette: {
		primary: {
			main: "#FBC837",
		},
		secondary: {
			main: "#0b246e",
		},
		danger: {
			main: "#d10000",
		},
		info: {
			main: "#0017d8",
		},
		success: {
			main: "#009906",
		},
		warning: {
			main: "#db9300",
		},
		accent: {
			main: "#8740e3",
		},
		black: {
			main: "#191919",
		},
		white: {
			main: "#efefef",
		},
	},
	typography: {
		fontFamily: ["Red Hat Display", "Space Grotesk", "sans-serif"],
		h1: {
			fontWeight: "800",
			fontSize: 60,
		},
		h2: {
			fontWeight: "600",
			fontSize: 48,
		},
		h3: {
			fontWeight: "600",
			fontSize: 32,
		},
		body1: {
			fontWeight: "400",
			fontSize: 21,
		},
	},
});
