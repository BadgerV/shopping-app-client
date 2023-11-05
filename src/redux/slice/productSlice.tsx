import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const development = "http://localhost:3000/v1";
// const production = "https://shopping-app-j93p.onrender.com";

// interface ProductItems {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   shippingCost: number;
//   productDiscount: number;
// }

interface ProductState {
  products: any;
  isLoadingProduct: boolean;
  productCategories: any;
  error: string | undefined | any;
  isLoadingRandomProducts : boolean
}
const initialState: ProductState = {
  error: null,
  products: [],
  productCategories: [],
  isLoadingProduct: false,
  isLoadingRandomProducts : false
};

export const getRandomProducts = createAsyncThunk(
  "product/get-random-products",
  async () => {
    const response = await axios.get(
      `${development}/product/get-random-products`
    );
    console.log(response.data);
    return response.data;
  }
);

export const GetProductCategories = createAsyncThunk(
  "product/get-product-categories",
  async () => {
    const response = await axios.get(
      `${development}/product/get-product-categories`
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomProducts.pending, (state) => {
        state.isLoadingRandomProducts = true;
      })
      .addCase(getRandomProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoadingRandomProducts = false;
      })
      .addCase(getRandomProducts.rejected, (state) => {
        state.isLoadingRandomProducts = false;
      })
      .addCase(GetProductCategories.pending, (state) => {
        state.isLoadingProduct = true;
      })
      .addCase(GetProductCategories.fulfilled, (state, action) => {
        state.productCategories = action.payload;
        state.isLoadingProduct = false;
      })
      .addCase(GetProductCategories.rejected, (state, action) => {
        state.error = action.error;
        state.isLoadingProduct = false;
      });
  },
});

export default productSlice.reducer;
