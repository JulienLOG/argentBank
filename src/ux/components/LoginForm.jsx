// _libs
import { useSelector, useDispatch } from "react-redux";
import { SET_USER_CREDENTIALS } from "../../app/actions/userSlice.js";
import { useNavigate } from "react-router";
import { POSTauth } from "../../services/APIservices.js";
import { useState } from "react";

export default function LoginForm() {
	const userStore = useSelector((state) => state.user);
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		if (name === "email") dispatch(SET_USER_CREDENTIALS({ [name]: value }));
		if (name === "password") setPassword(value);
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		if (!userStore.credentials.email.length || !password.length) return;
		const reponse = await POSTauth({
			email: userStore.credentials.email,
			password: password,
		});
		handleSucces(reponse, "/profile");
	};

	const handleSucces = (reponse, route) => {
		document.cookie = `token=${reponse}`;
		setPassword("");
		navigate(route);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor="email">Email</label>
				<input
					type="text"
					id="email"
					name="email"
					value={userStore.credentials.email}
					onChange={handleChange}
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={handleChange}
				/>
			</div>
			<div className="input-remember">
				<input type="checkbox" id="remember-me" />
				<label htmlFor="remember-me">Remember me</label>
			</div>
			<button className="sign-in-button" type="submit">
				Sign In
			</button>
		</form>
	);
}
