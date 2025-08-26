import { Outlet } from "react-router";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function AppPage() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
