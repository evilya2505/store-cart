import fakeApi from "../../utils/fakeApi";
import {
  getProductsRequest,
  getProductsSuccess,
  requestFailed,
} from "../reducers/products";
import { AppDispatch } from "../store";

export const getProducts = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getProductsRequest());

    fakeApi
      .getProducts()
      .then((data) => {
        dispatch(getProductsSuccess(data));
      })
      .catch((err) => {
        dispatch(requestFailed());
      });
  };
};
