import { createAsyncThunk } from "@reduxjs/toolkit/react";

export interface LoginCredential {
  email: string;
  password: string;
}

export const userLogin = createAsyncThunk(
  "auth/login",
  async (credentiel: LoginCredential, { rejectWithValue }) => {
    try {
      const { email, password } = credentiel;
      console.log(credentiel);
      if (email === "rshawe2" && password === "OWsTbMUgFc") {
        // configure header's Content-Type as JSON
        const headers = {
          "Content-Type": "application/json",
        };
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            username: email,
            password: password,
            expiresInMins: 30, // optional, defaults to 60
          }),
        }).then((res) => res.json());
        // store user's token in local storage
        console.log(":)", response);
        localStorage.setItem("userToken", response.token);
        return response;
      } else {
        return rejectWithValue("Error in credential !");
      }
    } catch (error) {
      return rejectWithValue("Error in login ! ");
    }
  }
);
