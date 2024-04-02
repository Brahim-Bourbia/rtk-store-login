import { createSlice } from "@reduxjs/toolkit";

import { userLogin } from "./actions/authActions";

export interface LoginPayload {
  loading: boolean;
  id: string | null;
  token: string | null; // for storing the JWT
  error: any;
}
// initialize userToken from local storage
const token = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState: LoginPayload = {
  loading: false,
  id: null,
  token: token, // for storing the JWT
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.token;
        state.id = payload.id;
      }),
      builder.addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.token = null;
        state.id = null;
      });
  },
});

export default authSlice.reducer;
