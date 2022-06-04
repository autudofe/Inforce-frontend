import {
  ADD_COMMENT, ADD_COMMENT_DATA,
  DELETE_COMMENT, DELETE_PRODUCT,
  DELETE_PRODUCT_COMMENTS,
  EDIT_COMMENT,
} from "./actions/actionTypes";

const defaultState = {
  comments: []
};

export const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_COMMENT_DATA:
      return { ...state, comments: [...action.payload] };
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.map((comment) =>
            comment.id === action.payload.id &&
            comment.productId === action.payload.productId
              ? { ...comment, ...action.payload }
              : comment
          ),
        ],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter(
            (comment) =>
              !(
                comment.id === action.payload.id &&
                comment.productId === action.payload.productId
              )
          ),
        ],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        comments: [
          ...state.comments.filter(
            (comment) => !(comment.id === action.payload.id)
          ),
        ],
      };
    default:
      return state;
  }
};
