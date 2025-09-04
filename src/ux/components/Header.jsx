// _libs
import { useSelector, useDispatch } from "react-redux";
import { RESET_USER, SET_USER_PROFILE } from "../../app/actions/userSlice.js";
import { useMatch, Link, useNavigate } from "react-router";
import { paths } from "../../services/paths.js";

export default function Header() {
	const isLogged = useMatch(paths.profile);
	const userStore = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSignOut = () => {
		localStorage.removeItem("token");
		dispatch(RESET_USER());
		navigate("/login");
	};

	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to={isLogged ? "#" : paths.index}>
				<img
					className="main-nav-logo-image"
					src="/src/ui/images/argentBankLogo.png"
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			{isLogged ? (
				<div className="main-nav-links">
					<Link className="main-nav-item" to={paths.profile}>
						<i className="fa fa-user-circle"></i>
						{userStore.profile.firstName}
					</Link>
					<Link
						className="main-nav-item"
						to="#"
						onClick={handleSignOut}
					>
						<i className="fa fa-sign-out"></i>
						Sign Out
					</Link>
				</div>
			) : (
				<div>
					<Link className="main-nav-item" to={paths.login}>
						<i className="fa fa-user-circle"></i>
						Sign In
					</Link>
				</div>
			)}
		</nav>
	);
}
