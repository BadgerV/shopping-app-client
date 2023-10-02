import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  user: UserProps | null;
  isLoading: boolean;
  error: string | undefined;
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

interface UpdateUserProps {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

// Define an async thunk to make the API call
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ firstName, lastName, email, password }: UserProps) => {
    const response = await axios.post(
      "https://shopping-app-j93p.onrender.com/v1/user/signup",
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }
    );
    console.log(response.data);

    return response.data; // Return the data you want to store in the Redux state
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }: LoginProps) => {
    const response = await axios.post(
      "https://shopping-app-j93p.onrender.com/v1/user/login",
      {
        email: email,
        password: password,
      }
    );

    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ firstName, lastName, email, phoneNumber }: UpdateUserProps) => {
    // Retrieve the token from localStorage
    const theToken = localStorage.getItem("token");
    let theNewToken = null;
    if (theToken) {
      theNewToken = JSON.parse(theToken);
    }

    // Set the Axios request headers with the Authorization header
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${theNewToken}`,
    };

    // Make the Axios request with the configured headers
    const response = await axios.post(
      "https://shopping-app-j93p.onrender.com/v1/user/patch",
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
      },
      { headers: headers }
    );

    return response.data;
  }
);

export const verifyToken = createAsyncThunk("user/verifyToken", async () => {
  // Retrieve the token from localStorage
  const theToken = localStorage.getItem("token");
  let theNewToken = null;
  if (theToken) {
    theNewToken = JSON.parse(theToken);
  }
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${theNewToken}`,
  };

  const response = await axios.get(
    "https://shopping-app-j93p.onrender.com/v1/user/me",
    {
      headers: headers,
    }
  );
  return response.data;
});

export const verifyIfToken = createAsyncThunk(
  "user/veryfyIfToken",
  async () => {
    const theToken = localStorage.getItem("token");

    if (!(theToken === null)) {
      console.log("The token is there");
    }
  }
);

const initialState: UserState = {
  user: null,
  userToken: null,
  isLoading: false,
  isSuccess: false, // Initialize isSuccess as false
  error: undefined,
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
        state.user = action.payload.newUser;
        state.userToken = action.payload.token;
        state.isSuccess = true; // Update isSuccess when registration is successful
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
        state.isSuccess = false; // Update isSuccess when registration fails
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.userToken = action.payload.token;
        state.isSuccess = true;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
        state.isSuccess = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(verifyToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(verifyIfToken.fulfilled, (state) => {
        state.isSuccess = true;
      })
  },
});

export default userSlice.reducer;
