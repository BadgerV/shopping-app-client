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
  error: string | undefined | any;
}
const initialState: ProductState = {
  isLoadingProduct: false,
  error: null,
  products: [],
};

export const getRandomProducts = createAsyncThunk(
  "product/get-random-products",
  async () => {
    const response = await axios.get(
      `${development}/product/get-random-products`
    );
    console.log(response.data.randomProducts);
    return response.data.randomProducts;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomProducts.pending, (state) => {
        state.isLoadingProduct = true;
      })
      .addCase(getRandomProducts.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.products = action.payload;
      })
      .addCase(getRandomProducts.rejected, (state) => {
        state.isLoadingProduct = false;
      });
  },
});

export default productSlice.reducer;
