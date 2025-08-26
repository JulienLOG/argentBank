// _libs
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// _ux and _ui
import "./ui/styles/main.css";
import HomePage from "./ux/pages/HomePage.jsx";
import LoginPage from "./ux/pages/LoginPage.jsx";
import ProfilePage from "./ux/pages/ProfilePage.jsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/profile" element={<ProfilePage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
