// _lib
import { createSlice } from "@reduxjs/toolkit";

const createInitialState = () => {
	return {
		credentials: { email: "" },
		profile: { id: "", firstName: "", lastName: "" },
	};
};

const userSlice = createSlice({
	name: "user",
	initialState: createInitialState(),
	reducers: {
		SET_USER_CREDENTIALS: (state, action) => {
			const { email } = action.payload;
			state.credentials.email = email ?? "";
		},
		SET_USER_PROFILE: (state, action) => {
			const { id, firstName, lastName } = action.payload;
			if (id !== undefined) state.profile.id = id;
			if (firstName !== undefined) state.profile.firstName = firstName;
			if (lastName !== undefined) state.profile.lastName = lastName;
		},
		UPDATE_USER_PROFILE: (state, action) => {
			const { firstName, lastName } = action.payload;
			if (firstName !== undefined) state.profile.firstName = firstName;
			if (lastName !== undefined) state.profile.lastName = lastName;
		},
		CLEAR_USER_CREDENTIALS: (state) => {
			state.credentials.email = "";
		},
		CLEAR_USER_PROFILE: (state) => {
			state.profile.id = "";
			state.profile.firstName = "";
			state.profile.lastName = "";
		},
		RESET_USER: () => createInitialState(),
	},
});

export const {
	SET_USER_CREDENTIALS,
	SET_USER_PROFILE,
	UPDATE_USER_PROFILE,
	CLEAR_USER_CREDENTIALS,
	CLEAR_USER_PROFILE,
	RESET_USER,
} = userSlice.actions;
export default userSlice.reducer;
