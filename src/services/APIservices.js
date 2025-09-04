// _port
const ROOT = "http://localhost:3001";

export const POSTauth = async (auth) => {
	const { email, password } = auth;
	try {
		const reponse = await fetch(`${ROOT}/api/v1/user/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});
		if (!reponse.ok) {
			return false;
		}
		if (reponse.ok) {
			const data = await reponse.json();
			return data.body.token;
		}
		return reponse;
	} catch (err) {
		console.log("POST promise is not done! :", err);
	} finally {
		console.log("POST promise is done!");
	}
};

export const POSTprofile = async (token) => {
	try {
		const reponse = await fetch(`${ROOT}/api/v1/user/profile`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (reponse.ok) {
			const data = await reponse.json();
			console.log("reponse back POST log", data.body);
			return data.body;
		}
		return reponse;
	} catch (err) {
		console.log("POST promise is not done! :", err);
	} finally {
		console.log("POST promise is done!");
	}
};

export const PUTprofile = async (token, firstName, lastName) => {
	try {
		const reponse = await fetch(`${ROOT}/api/v1/user/profile`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ firstName, lastName }),
		});
		if (reponse.ok) {
			const data = await reponse.json();
			return data.body;
		}
		return reponse;
	} catch (err) {
		console.log("PUT promise is not done! :", err);
	} finally {
		console.log("PUT promise is done!");
	}
};
