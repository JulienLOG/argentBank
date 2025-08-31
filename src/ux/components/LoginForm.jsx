// _libs
import { useContext } from "react";
import { AuthContext } from "../../store/ContextAuth.jsx";

export default function LoginForm() {
	const { userAuth, setUserAuth } = useContext(AuthContext);
	console.log("AuthContext :", userAuth);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setUserAuth((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (!userAuth.email.length || !userAuth.password.length) return;
		setUserAuth((prev) => ({ ...prev }));
		handleClear(evt);
	};

	const handleClear = (evt) => {
		evt.currentTarget.reset();
		setUserAuth(() => ({ email: "", password: "" }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor="email">Email</label>
				<input
					type="text"
					id="email"
					name="email"
					value={userAuth.email}
					onChange={handleChange}
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					value={userAuth.password}
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
