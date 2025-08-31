// _lib
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [userAuth, setUserAuth] = useState({ email: "", password: "" });

	return (
		<AuthContext.Provider value={({ userAuth, setUserAuth })}>
			{children}
		</AuthContext.Provider>
	);
}
