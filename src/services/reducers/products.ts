import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../utils/types";

export interface TProductsListState {
  products: TProduct[];
  totalSum: number;
  request: boolean;
  requestFailed: boolean;
}

export const initialState: TProductsListState = {
  products: [],
  totalSum: 0,
  request: false,
  requestFailed: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsRequest(state: TProductsListState) {
      state.request = true;
      state.requestFailed = false;
    },
    getProductsSuccess(
      state: TProductsListState,
      action: PayloadAction<TProduct[]>
    ) {
      state.products = action.payload;
      state.totalSum = action.payload.reduce(
        (sum, product) => sum + product.price * product.count,
        0
      );

      state.request = false;
      state.requestFailed = false;
    },
    // Добавление +1 товара
    increaseItemToCart(
      state: TProductsListState,
      action: PayloadAction<number>
    ) {
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.count < 10) {
        product.count += 1;
        state.totalSum += product.price;
      }
    },
    // Вычет -1 товара
    decreaseItemToCart(
      state: TProductsListState,
      action: PayloadAction<number>
    ) {
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.count > 1) {
        product.count -= 1;
        state.totalSum -= product.price;
      }
    },
    // Удаление товара из корзины
    removeItemFromCart(
      state: TProductsListState,
      action: PayloadAction<number>
    ) {
      const product = state.products.find((p) => p.id === action.payload);

      if (product) product.count -= 1;

      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    requestFailed(state: TProductsListState) {
      state.request = false;
      state.requestFailed = true;
    },
  },
});
export const {
  getProductsRequest,
  getProductsSuccess,
  increaseItemToCart,
  decreaseItemToCart,
  removeItemFromCart,
  requestFailed,
} = productsSlice.actions;

export default productsSlice.reducer;
