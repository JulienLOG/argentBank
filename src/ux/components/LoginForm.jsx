// _libs
import { useContext } from "react";
import { AuthContext } from "../../store/ContextAuth.jsx";
import { POSTauth } from "../../services/APIservices.js";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setTest } from "../../app/actions/userSlice.js";

export default function LoginForm() {
	const { userAuth, setUserAuth } = useContext(AuthContext);
	const navigate = useNavigate();
	const testRedux = useSelector((state) => state.user);
  	const dispatch = useDispatch();
	console.log(testRedux)

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setUserAuth((prev) => ({ ...prev, [name]: value }));
		dispatch(setTest(value));
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		if (!userAuth.email.length || !userAuth.password.length) return;
		const reponse = await POSTauth(userAuth);
		handleClear(reponse);
		navigate("/profile");
	};

	const handleClear = (token) => {
		setUserAuth((prev) => ({ ...prev, password: "", token }));
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
