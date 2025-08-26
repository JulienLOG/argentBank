// _libs
import { useMatch, Link } from "react-router";

export default function Header({ name = "Tony" }) {
	const routePaths = { index: "/", login: "/login", profile: "/profile" };
	const matchProfilePath = useMatch(routePaths.profile);

	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to={routePaths.index}>
				<img
					className="main-nav-logo-image"
					src="/src/ui/images/argentBankLogo.png"
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			{matchProfilePath ? (
				<div>
					<Link className="main-nav-item" to={routePaths.profile}>
						<i className="fa fa-user-circle"></i>
						{name}
					</Link>
					<Link className="main-nav-item" to={routePaths.index}>
						<i className="fa fa-sign-out"></i>
						Sign Out
					</Link>
				</div>
			) : (
				<div>
					<Link className="main-nav-item" to={routePaths.login}>
						<i className="fa fa-user-circle"></i>
						Sign In
					</Link>
				</div>
			)}
		</nav>
	);
}
