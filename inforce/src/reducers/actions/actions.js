import {
    ADD_COMMENT, ADD_COMMENTS_PRODUCT, ADD_PRODUCT,
    DELETE_COMMENT, DELETE_COMMENTS_PRODUCT,
    DELETE_PRODUCT, DELETE_PRODUCT_COMMENTS, EDIT_COMMENT, EDIT_COMMENTS, EDIT_COMMENTS_PRODUCT, EDIT_PRODUCT,
} from "./actionTypes";

export const addProduct = (payload) => ({type: ADD_PRODUCT, payload});
export const editProduct = (payload) => ({type: EDIT_PRODUCT, payload});
export const deleteProduct = (payload) => ({type: DELETE_PRODUCT, payload});


export const addComment = (payload) => ({type: ADD_COMMENT, payload});
export const editComment = (payload) => ({type: EDIT_COMMENT, payload});
export const deleteComment = (payload) => ({type: DELETE_COMMENT, payload});


