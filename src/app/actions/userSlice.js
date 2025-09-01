import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "userAction",
	initialState: {},
	reducers: {
		TEST: (state) => ({ ...state, test: "Test is Ok!" }),
	},
});

export const { TEST } = userSlice.actions;
export default userSlice.reducer;
