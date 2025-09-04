// _lib
import { useEffect } from "react";
import { POSTprofile } from "../../services/APIservices.js";
import { SET_USER_PROFILE } from "../../app/actions/userSlice.js";
import { useDispatch } from "react-redux";
import { useMatch } from "react-router";
import { paths } from "../../services/paths.js";
import UserName from "../components/UserName.jsx";

export default function ProfilePage() {
	const isLogged = useMatch(paths.profile);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isLogged) return;
		const token = localStorage.getItem("token");
		POSTprofile(token)
			.then(({ id, firstName, lastName }) =>
				dispatch(SET_USER_PROFILE({ id, firstName, lastName }))
			)
			.catch((err) => console.log(err));
	}, [isLogged]);

	return (
		<main className="main bg-light">
			<UserName />
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">
						Argent Bank Checking (x8349)
					</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">
						Available Balance
					</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">
						View transactions
					</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">
						Argent Bank Savings (x6712)
					</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">
						Available Balance
					</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">
						View transactions
					</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">
						Argent Bank Credit Card (x8349)
					</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">
						Current Balance
					</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">
						View transactions
					</button>
				</div>
			</section>
		</main>
	);
}
