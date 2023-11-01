import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { RootState } from "../store";
import axios from "axios";

interface UserState {
  user: UserProps | null;
  isLoading: boolean;
  isSpecialLoading: boolean;
  error: string | undefined | any;
  isSuccess: boolean;
  userToken: string | null;
}

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isVendor?: string;
  avatar: null | string | ArrayBufferLike | any;
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
  password: string;
  newPassword: string;
}

interface BecomeVendorProps {
  matricNumber: string;
  DOB: any;
  gender: string | undefined;
  motto: string;
  department: string;
  avatar: any;
  firstCategory: string;
  secondCategory: string;
  thirdCategory: string;
}

interface PostProductProps {
  productName: string;
  productPrice: number;
  productDescription: string;
  productStock: number;
  productDiscount: number;
  shippingCost: number;
  productImage: any;
}

// Define an async thunk to make the API call nonsese
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ firstName, lastName, email, password }: UserProps) => {
    console.log("register user function Working");
    const response = await axios.post(
      "https://shopping-app-j93p.onrender.com/v1/user/signup",
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }
    );

    if (response.data) {
      const userToken = JSON.stringify(response.data.token);

      localStorage.setItem("token", userToken);
    }
    // console.log(response.data);

    return response.data; // Return the data you want to store in the Redux state
  }
);

//outlet that allows users to logink
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

    if (response.data) {
      const userToken = JSON.stringify(response.data.token);

      localStorage.setItem("token", userToken);
    }
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    newPassword,
  }: UpdateUserProps) => {
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
        password: password,
        newPassword: newPassword,
      },
      { headers: headers }
    );

    return response.data;
  }
);

export const verifyToken = createAsyncThunk("user/verifyToken", async () => {
  try {
    // Retrieve the token from localStorage nonsese

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

    if (!response.data) {
      localStorage.removeItem("token");
    }

    return response.data;
  } catch (error) {
    localStorage.removeItem("token");
    return error;
  }
});

export const becomeVendor = createAsyncThunk(
  "user/becomeVendor",
  async ({
    matricNumber,
    DOB,
    gender,
    motto,
    department,
    avatar,
    thirdCategory,
    secondCategory,
    firstCategory,
  }: BecomeVendorProps) => {
    // Retrieve the token from localStorage
    const theToken = localStorage.getItem("token");
    let theNewToken = null;
    if (theToken) {
      theNewToken = JSON.parse(theToken);
    }

    // Set the Axios request headers with the Authorization header
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${theNewToken}`,
    };

    const response = await axios.post(
      "https://shopping-app-j93p.onrender.com/v1/user/be-vendor/",
      {
        matricNumber: matricNumber,
        DOB: DOB,
        gender: gender,
        motto: motto,
        department: department,
        avatar: avatar,
        firstCategory: firstCategory,
        secondCategory: secondCategory,
        thirdCategory: thirdCategory,
      },
      { headers: headers }
    );

    return response.data;
  }
);

export const postProduct = createAsyncThunk(
  "user/postProduct",
  async ({
    productName,
    productPrice,
    productDescription,
    productStock,
    shippingCost,
    productDiscount,
    productImage,
  }: PostProductProps) => {
    // Retrieve the token from localStorage
    const theToken = localStorage.getItem("token");
    let theNewToken = null;
    if (theToken) {
      theNewToken = JSON.parse(theToken);
    }

    // Set the Axios request headers with the Authorization header
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${theNewToken}`,
    };

    const response = await axios.post(
      "https://shopping-app-j93p.onrender.com/v1/product/post-product",
      {
        name: productName,
        description: productDescription,
        originalProductPrice: productPrice,
        stock: productStock,
        productDiscount: productDiscount,
        shippingCost: shippingCost,
        productImage: productImage,
      },

      { headers: headers }
    );

    return response.data;
  }
);

const initialState: UserState = {
  user: null,
  userToken: null,
  isLoading: false,
  isSuccess: false, // Initialize isSuccess as false
  error: undefined,
  isSpecialLoading: false,
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
        state.isSpecialLoading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.isSpecialLoading = false;
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.isSpecialLoading = false;
        state.error = action.error.message;
      })
      .addCase(becomeVendor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(becomeVendor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(becomeVendor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occured";
      })
      .addCase(postProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(postProduct.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
