// _libs and paths
import { Outlet, Link } from "react-router";
import { useSelector } from "react-redux";
import { paths } from "../../services/paths";

export default function RequireAuth() {
	const isConnected = useSelector((state) => state.user.connect);
	console.log(isConnected);

	return isConnected ? (
		<Outlet />
	) : (
		<div className="main">
			<h2>Please log in before visiting your profile.</h2>
			<Link to={paths.login}>Log in</Link>
		</div>
	);
}
