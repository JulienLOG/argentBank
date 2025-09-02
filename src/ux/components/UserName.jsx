import { useState } from "react";
import { useSelector } from "react-redux";

export default function UserName() {
	const [isEdit, setIsEdit] = useState(false);
	const userStore = useSelector((state) => state.user);

	return (
		<div className="header">
			{isEdit ? (
				<div className="userEdit">
					<h1>
						Welcome back
						<br />
					</h1>
					<div className="names-edit">
						<input
							className="#"
							type="text"
							id="firstName"
							placeholder={userStore.profile.firstName}
							onChange={(e) =>
								console.log("firstName :", e.target.value)
							}
						/>
						<input
							className="#"
							type="text"
							id="lastName"
							placeholder={userStore.profile.lastName}
							onChange={(e) =>
								console.log("lastName :", e.target.value)
							}
						/>
					</div>
					<div className="buttons-edit">
						<button
							className="edit-button"
							onClick={() => console.log("save")}
						>
							Save
						</button>
						<button
							className="edit-button"
							onClick={() => setIsEdit(false)}
						>
							Cancel
						</button>
					</div>
				</div>
			) : (
				<div>
					<h1>
						Welcome back
						<br />
						<div className="userName">
							{userStore.profile.firstName}{" "}
							{userStore.profile.lastName}!
						</div>
					</h1>
					<button
						onClick={() => setIsEdit(true)}
						className="edit-button"
					>
						Edit Name
					</button>
				</div>
			)}
		</div>
	);
}
