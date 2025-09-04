import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USER_PROFILE } from "../../app/actions/userSlice";
import { PUTprofile } from "../../services/APIservices";

export default function UserName() {
	const dispatch = useDispatch();
	const { firstName, lastName } = useSelector((s) => s.user.profile);
	const [isEdit, setIsEdit] = useState(false);
	const [userName, setUserName] = useState({ firstName: "", lastName: "" });

	useEffect(() => {
		if (isEdit) {
			setUserName({
				firstName: firstName ?? "",
				lastName: lastName ?? "",
			});
		}
	}, [isEdit]);

	const handleSaveEdit = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem("token");
		const updated = await PUTprofile(
			token,
			userName.firstName,
			userName.lastName
		);
		dispatch(
			UPDATE_USER_PROFILE({
				firstName: updated.firstName ?? "",
				lastName: updated.lastName ?? "",
			})
		);
		setIsEdit(false);
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		setUserName((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="header">
			{isEdit ? (
				<div className="userEdit">
					<h1>
						Welcome back
						<br />
					</h1>
					<form className="edit-user" onSubmit={handleSaveEdit}>
						<div className="edit-user-items">
							<input
								className="edit-user-input"
								type="text"
								id="firstName"
								name="firstName"
								value={userName.firstName}
								onChange={onChange}
							/>
							<input
								className="edit-user-input"
								type="text"
								id="lastName"
								name="lastName"
								value={userName.lastName}
								onChange={onChange}
							/>
						</div>
						<div className="edit-user-items">
							<button type="submit" className="edit-button">
								Save
							</button>
							<button
								type="button"
								className="edit-button"
								onClick={() => setIsEdit(false)}
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
						<span className="userName">
							{firstName} {lastName}!
						</span>
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
