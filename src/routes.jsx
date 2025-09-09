// _libs
import { createBrowserRouter } from "react-router";
// _pages_component
import AppPage from "./ux/pages/AppPage.jsx";
import HomePage from "./ux/pages/HomePage.jsx";
import LoginPage from "./ux/pages/LoginPage.jsx";
import ProfilePage from "./ux/pages/ProfilePage.jsx";
import RequireAuth from "./ux/pages/RequireAuthPage.jsx";
import ErrorBoundaryPage from "./ux/pages/ErrorBoundaryPage.jsx";

export const routes = createBrowserRouter([
	{
		path: "/",
		Component: AppPage,
		ErrorBoundary: ErrorBoundaryPage,
		children: [
			{ index: true, Component: HomePage },
			{ path: "login", Component: LoginPage },
			{
				Component: RequireAuth,
				children: [{ path: "profile", Component: ProfilePage }],
			},
		],
	},
]);
