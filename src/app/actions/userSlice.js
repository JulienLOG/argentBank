// _lib
import { createSlice } from "@reduxjs/toolkit";

const initialState = { test: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const { setTest } = userSlice.actions;
export default userSlice.reducer;
