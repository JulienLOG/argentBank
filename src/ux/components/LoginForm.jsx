// _libs
import { useRef, useState } from "react";

const inputs = {
	email: { id: "userEmail", name: "email", value: null },
	password: { id: "userPassword", name: "password", value: null },
};

const loginFormat = { [inputs.email.name]: null, [inputs.password.name]: null };

export default function LoginForm() {
	const [user, setUser] = useState({ ...loginFormat });
	const userRef = useRef({ email: "", password: "" });

	const handleChange = (e) => {
		const name = e.target.name;
		userRef.current[name] = e.target.value;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setUser((itm) => ({
			...itm,
			[inputs.email.name]: userRef.current.email,
			[inputs.password.name]: userRef.current.password,
		}));
		resetForm(event);
	};

	const resetForm = (event) => {
		event.currentTarget.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor={inputs.email.id}>Email</label>
				<input
					type="text"
					id={inputs.email.id}
					name={inputs.email.name}
					onChange={handleChange}
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor={inputs.password.id}>Password</label>
				<input
					type="password"
					id={inputs.password.id}
					name={inputs.password.name}
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
