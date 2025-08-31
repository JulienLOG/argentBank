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
