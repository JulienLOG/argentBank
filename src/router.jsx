// _libs and _routes
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./routes.jsx";
// _ui
import "./ui/styles/main.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
	<StrictMode>
		<RouterProvider router={routes} />
	</StrictMode>
);
