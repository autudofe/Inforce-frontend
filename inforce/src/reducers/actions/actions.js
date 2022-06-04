import {
  ADD_COMMENT,
  ADD_COMMENTS_DATA,
  ADD_PRODUCT,
  ADD_PRODUCTS_DATA,
  DELETE_COMMENT,
  DELETE_PRODUCT_AND_COMMENTS,
  EDIT_COMMENT,
} from "./actionTypes";

export const addProduct = (payload) => ({ type: ADD_PRODUCT, payload });
export const addProductsData = (payload) => ({
  type: ADD_PRODUCTS_DATA,
  payload,
});
export const deleteProductAndComments = (payload) => ({
  type: DELETE_PRODUCT_AND_COMMENTS,
  payload,
});
export const editComment = (payload) => ({ type: EDIT_COMMENT, payload });
export const addComment = (payload) => ({ type: ADD_COMMENT, payload });
export const deleteComment = (payload) => ({ type: DELETE_COMMENT, payload });
export const addCommentsData = (payload) => ({
  type: ADD_COMMENTS_DATA,
  payload,
});

