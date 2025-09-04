// _libs and _routes
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./routes.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";
// _ui
import "./ui/styles/main.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</StrictMode>
);
