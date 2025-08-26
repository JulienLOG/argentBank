// _libs
import { NavLink, useRouteError } from "react-router";

export default function ErrorBoundaryPage() {
	const error = useRouteError();
	console.log(error);
	return (
		<>
			<h1>Error</h1>
			<p>{error.status || "Status unknown"}</p>
			<p>
				{ error.statusText 
                    || error.message
                    || "An error of unknown type has occurred" }
			</p>
			<NavLink to="/">Back to home</NavLink>
		</>
	);
}
