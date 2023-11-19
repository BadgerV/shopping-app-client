import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { transformsImageStrings } from "../../utils/utilsFunctions";

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
  categoriesProduct: any;
  error: string | undefined | any;
  isLoadingRandomProducts: boolean;
  particularProduct: any;
  particularProductLoading: boolean;
  loadingWithUserOrProduct: boolean;
  listOfUsersAndproduct: any;
}
const initialState: ProductState = {
  error: null,
  products: [],
  productCategories: [],
  isLoadingProduct: false,
  isLoadingRandomProducts: false,
  categoriesProduct: [],
  particularProduct: undefined,
  particularProductLoading: false,
  loadingWithUserOrProduct: true,
  listOfUsersAndproduct: [],
};

export const getRandomProducts = createAsyncThunk(
  "product/get-random-products",
  async () => {
    const response = await axios.get(
      `${development}/product/get-random-products`
    );
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

export const GetCategoriesProduct = createAsyncThunk(
  "/product/get-categories-product",
  async (category: string | undefined) => {
    const response = await axios.get(
      `${development}/product/get-categories-product/${category}`
    );

    function transformsImageStrings(products: any) {
      // Create a new array to store modified products
      const transformedProducts: any = [];

      // Iterate over each product in the original array
      products.forEach((element: any) => {
        // Clone the original product to avoid modifying it directly
        const modifiedProduct = { ...element };

        const { data } = modifiedProduct.productImage;

        // Convert the data array to a Uint8Array
        const uint8Array: any = new Uint8Array(data);

        // Convert Uint8Array to Base64
        const base64String = btoa(String.fromCharCode.apply(null, uint8Array));

        // Update the productImage property in the cloned product
        modifiedProduct.productImage = base64String;

        // Add the modified product to the new array
        transformedProducts.push(modifiedProduct);
      });

      // Return the new array with modified products
      return transformedProducts;
    }
    const result = transformsImageStrings(response.data);
    return result;
  }
);

export const getParticularProductWithId = createAsyncThunk(
  "product/getParticularProductWithId",
  async (id: string) => {
    const response = await axios.get(
      `${development}/product/get-product/${id}`
    );

    const result = transformsImageStrings(response.data);

    return result[0];
  }
);

export const getProductOrUserWithName = createAsyncThunk(
  "product/getProductOrUserWithName",
  async (name: string) => {
    const response = await axios.get(`${development}/product/search/${name}`);

    console.log(response.data);

    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    eraseListOfProducts: (state) => {
      state.listOfUsersAndproduct = [];
    },
  },
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
      })
      .addCase(GetCategoriesProduct.pending, (state) => {
        state.error = false;
        state.isLoadingProduct = true;
        state.categoriesProduct = [];
      })
      .addCase(GetCategoriesProduct.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.categoriesProduct = action.payload;
        console.log(state.categoriesProduct);
      })
      .addCase(GetCategoriesProduct.rejected, (state, action) => {
        state.isLoadingProduct = false;
        state.error = action.error;
      })
      .addCase(getParticularProductWithId.pending, (state) => {
        state.particularProductLoading = true;
        state.error = false;
        state.particularProduct = undefined;
      })
      .addCase(getParticularProductWithId.fulfilled, (state, action) => {
        state.particularProduct = action.payload;
        state.particularProductLoading = false;
      })
      .addCase(getParticularProductWithId.rejected, (state, action) => {
        state.error = action.error;
        state.particularProductLoading = false;
      })
      .addCase(getProductOrUserWithName.pending, (state) => {
        state.loadingWithUserOrProduct = true;
        console.log(state.loadingWithUserOrProduct);
      })
      .addCase(getProductOrUserWithName.fulfilled, (state, action) => {
        state.loadingWithUserOrProduct = true;
        state.listOfUsersAndproduct = action.payload;
      })
      .addCase(getProductOrUserWithName.rejected, (state, action) => {
        state.loadingWithUserOrProduct = false;
        state.error = action.error;
      });
  },
});

export const { eraseListOfProducts } = productSlice.actions;

export default productSlice.reducer;
