import * as React from 'react';
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  FooterSection,
	Navbar,
	Sidebar,
} from "../components";
import LoginSection from '../components/Login/LoginSection.jsx';

const html = document.querySelector("html");


export const Login = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState({ right: false });

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setIsDrawerOpen({ ...isDrawerOpen, right: open });
	};

	useEffect(() => {
		if (
			window.navigator.userAgent.includes("Mobile") ||
			!window.navigator.userAgent.includes("Chrome")
		) {
			html.style.scrollBehavior = "smooth";
		} else {
			// if (window.navigator.userAgent.includes("Chrome")) {
			//! SOLUCION DE MOMENTO PARA UN BUG EN CHROME QUE IMPIDE UTILIZAR SMOOTH SCROLLING
			/* document.querySelectorAll("a").forEach((anchor) => {
				anchor.addEventListener("click", function (e) {
					e.preventDefault();

					document.querySelector(this.getAttribute("href")).scrollIntoView({
						behavior: "smooth",
					});
				});
			}); */
		}
		// else {
		// 	// 	//! Agrega el comportamiento smooth scrolling a todo navegador que no sea CHROME DESKTOP
		// 	html.style.scrollBehavior = "smooth";
		// }
	}, []);

  return(
    <Box sx={{ height: "100vh" }}>
			<Navbar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
			<Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
			
      <LoginSection />

      <FooterSection />
		</Box>
  );
}