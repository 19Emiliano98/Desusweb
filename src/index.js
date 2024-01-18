import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Form } from "./pages/Form.js";
import { Login } from "./pages/Login.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { landingTheme } from "./theme/landingTheme";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={landingTheme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />}/>
					<Route path="/form" element={<Form />}/>
					<Route path="/clientes" element={<Login />}/>
					<Route path="*" element={<Navigate to='/' />}/>
				</Routes>
				<CssBaseline />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);