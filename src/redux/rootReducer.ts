import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";

const rootReducer = combineReducers({
  userSlice: userSlice,
  cartSlice: cartSlice,
  productSlice: productSlice,
});

export default rootReducer;
