import { combineReducers } from "redux";
import productsSlice from "./products";

export const rootReducer = combineReducers({
  products: productsSlice,
});
