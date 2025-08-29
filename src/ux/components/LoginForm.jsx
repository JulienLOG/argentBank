// _libs
import { useState } from "react";

const inputs = {
	email: { id: "userEmail", name: "email", value: null },
	password: { id: "userPassword", name: "password", value: null },
};

const inputs_login = { [inputs.email.name]: "", [inputs.password.name]: "" };
const inputs_controller = { [inputs.email.name]: "", [inputs.password.name]: "",  msgErr : false};


export default function LoginForm() {
	console.log("render to start");
	const [userLogin, setUserLogin] = useState({ ...inputs_login });
	const [loginController, setLoginController] = useState({ ...inputs_controller });

	const handleChange = (evt) => {
		const {name ,value} = evt.target;
		setLoginController((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (!loginController.email.length || !loginController.password.length){
			setLoginController(prev => ({...prev, msgErr: true}));
			return;
		} else {
			setLoginController(prev => ({...prev, msgErr: false}));
		}
		setUserLogin(prev => ({ ...prev, email: loginController.email, password: loginController.password}));
		handleClear();
	};

	const handleClear = () => {
		setLoginController(inputs_controller);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor={inputs.email.id}>Email</label>
				<input
					type="text"
					id={inputs.email.id}
					name={inputs.email.name}
					value={loginController.email}
					onChange={handleChange}
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor={inputs.password.id}>Password</label>
				<input
					type="password"
					id={inputs.password.id}
					name={inputs.password.name}
					value={loginController.password}
					onChange={handleChange}
				/>
			</div>
			<div className="input-remember">
				<input type="checkbox" id="remember-me" />
				<label htmlFor="remember-me">Remember me</label>
			</div>
			{ loginController.msgErr && <p>You must enter your email address and password to log in.</p>}
			<button className="sign-in-button" type="submit">
				Sign In
			</button>
		</form>
	);
}
