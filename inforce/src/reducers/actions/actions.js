import {
  ADD_COMMENT,
  ADD_COMMENT_DATA,
  ADD_PRODUCT,
  ADD_PRODUCT_DATA,
  DELETE_COMMENT,
  DELETE_PRODUCT,
  EDIT_COMMENT,
  EDIT_PRODUCT,
} from "./actionTypes";

export const addProductData = (payload) => ({
  type: ADD_PRODUCT_DATA,
  payload,
});
export const addProduct = (payload) => ({ type: ADD_PRODUCT, payload });
export const editProduct = (payload) => ({type: EDIT_PRODUCT, payload});
export const deleteProduct = (payload) => ({ type: DELETE_PRODUCT, payload });

export const addCommentData = (payload) => ({
  type: ADD_COMMENT_DATA,
  payload,
});
export const addComment = (payload) => ({ type: ADD_COMMENT, payload });
export const editComment = (payload) => ({type: EDIT_COMMENT, payload});
export const deleteComment = (payload) => ({type: DELETE_COMMENT, payload});


