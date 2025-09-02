import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USER_PROFILE } from "../../app/actions/userSlice";

export default function UserName() {
	const [isEdit, setIsEdit] = useState(false);
	const [userName, setUserName] = useState({ firstName: "", lastName: "" });
	const userStore = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleSaveEdit = (evt) => {
		evt.preventDefault();
		dispatch(
			UPDATE_USER_PROFILE({
				firstName: userName.firstName,
				lastName: userName.lastName,
			})
		);
		setIsEdit(false);
	};

	const handleCloseEdit = () => {
		setIsEdit(false);
		setUserName({ firstName: "", lastName: "" });
	};
	console.log(userName);
	console.log;
	return (
		<div className="header">
			{isEdit ? (
				<div className="userEdit">
					<h1>
						Welcome back
						<br />
					</h1>
					<form onSubmit={handleSaveEdit}>
						<input
							className="#"
							type="text"
							id="firstName"
							placeholder={userStore.profile.firstName}
							value={
								isEdit
									? userName.firstName
									: userStore.profile.firstName
							}
							onChange={(evt) =>
								setUserName((prev) => ({
									...prev,
									firstName: evt.target.value,
								}))
							}
						/>
						<input
							className="#"
							type="text"
							id="lastName"
							placeholder={userStore.profile.lastName}
							value={
								isEdit
									? userName.lastName
									: userStore.profile.lastName
							}
							onChange={(evt) =>
								setUserName((prev) => ({
									...prev,
									lastName: evt.target.value,
								}))
							}
						/>
						<div className="buttons-edit">
							<button
								className="edit-button"
								onClick={handleSaveEdit}
							>
								Save
							</button>
							<button
								type="submit"
								className="edit-button"
								onClick={handleCloseEdit}
							>
								Cancel
							</button>
						</div>
					</form>
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
