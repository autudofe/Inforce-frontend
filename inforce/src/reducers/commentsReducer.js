import {
  ADD_COMMENT,
  ADD_COMMENTS_DATA,
  DELETE_COMMENT,
  DELETE_PRODUCT_AND_COMMENTS,
  EDIT_COMMENT,
} from "./actions/actionTypes";

const defaultState = {
  comments: []
};

export const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_COMMENTS_DATA:
      return { ...state, comments: [...action.payload] };
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.map((comment) =>
            comment.id === action.payload.id
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
            (comment) => !(comment.id === action.payload)
          ),
        ],
      };
    case DELETE_PRODUCT_AND_COMMENTS:
      return {
        ...state,
        comments: [
          ...state.comments.filter(
            (comment) => !(comment.productId === action.payload)
          ),
        ],
      };
    default:
      return state;
  }
};
