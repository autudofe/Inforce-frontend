import {
  ADD_PRODUCTS,
  DELETE_PRODUCT,
  VISIBILITY_MODAL_WINDOW,
} from "./actionTypes";

export const addProducts = (payload) => ({ type: ADD_PRODUCTS, payload });
export const deleteProduct = (payload) => ({ type: DELETE_PRODUCT, payload });
export const visibilityModalWindow = (payload) => ({
  type: VISIBILITY_MODAL_WINDOW,
  payload,
});
