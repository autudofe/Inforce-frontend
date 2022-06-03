import {
  ADD_COMMENT,
  DELETE_COMMENT, DELETE_PRODUCT,
  DELETE_PRODUCT_COMMENTS,
  EDIT_COMMENT,
} from "./actions/actionTypes";

const defaultState = {
  comments: [
    {
      id: 1,
      productId: 1,
      description: "comment 1 for id 1",
      date: "14:00 22.08.2021",
    },
    {
      id: 2,
      productId: 1,
      description: "comment 2 for id 1",
      date: "15:00 22.08.2021",
    },
    {
      id: 1,
      productId: 3,
      description: "comment 1 for id 2",
      date: "16:00 22.08.2021",
    },
    {
      id: 2,
      productId: 3,
      description: "comment 2 for id 2",
      date: "17:00 22.08.2021",
    },
  ],
};

export const commentsReducer = (state = defaultState, action) => {
  switch (action.type) {
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
