import { useSelector } from "react-redux";

export default function UserName() {
	const userStore = useSelector((state) => state.user);

	return (
		<div className="header">
			<h1>
				Welcome back
				<br />
				{userStore.profile.firstName} {userStore.profile.lastName}!
			</h1>
			<button className="edit-button">Edit Name</button>
		</div>
	);
}
