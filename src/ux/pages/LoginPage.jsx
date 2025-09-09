// _components
import LoginForm from "../components/LoginForm.jsx";

export default function LoginPage() {
	return (
		<main className="main-sign-in bg-light">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<LoginForm />
			</section>
		</main>
	);
}
