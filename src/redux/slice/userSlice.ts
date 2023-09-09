import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  user: any;
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
  userToken: string | null;
}

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginProps {
  email: string;
  password: string;
}

// Define an async thunk to make the API call
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ firstName, lastName, email, password }: UserProps) => {
    try {
      const response = await axios.post(
        "https://shopping-app-j93p.onrender.com/v1/user/signup",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }
      );

      return response.data; // Return the data you want to store in the Redux state
    } catch (error) {
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }: LoginProps) => {
    try {
      const response = await axios.post(
        "https://shopping-app-j93p.onrender.com/v1/user/signup",
        {
          email: email,
          password: password,
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState: UserState = {
  user: null,
  userToken: null,
  isLoading: false,
  isSuccess: false, // Initialize isSuccess as false
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.userToken = action.payload.token;
        state.isSuccess = true; // Update isSuccess when registration is successful
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
        state.isSuccess = false; // Update isSuccess when registration fails
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.userToken = action.payload.token;
        state.isSuccess = true
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
        state.isSuccess = false;
      })
  },
});

export default userSlice.reducer;
