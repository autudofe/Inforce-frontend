import {
  ADD_COMMENT,
  ADD_COMMENTS_PRODUCT,
  ADD_PRODUCT, ADD_PRODUCT_DATA, DELETE_COMMENT, DELETE_COMMENTS_PRODUCT,
  DELETE_PRODUCT,
  EDIT_COMMENT, EDIT_COMMENTS, EDIT_COMMENTS_PRODUCT,
  EDIT_PRODUCT,
} from "./actions/actionTypes";

const defaultState = {
  products: []
};

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_DATA:
      return { ...state, products: [...action.payload] };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, ...action.payload }
              : product
          ),
        ],
      };
    case DELETE_COMMENT:
      console.log(typeof action.payload.productId)
      return {
        ...state,
        products: [
          ...state.products.map((product) =>
              product.id === action.payload.productId
                  ? { ...product, comments: [...product.comments.filter(item=>item !== action.payload.id)] }
                  : product
          ),
        ],
      };
    case ADD_COMMENT:
      console.log(typeof action.payload.productId)
      return {
        ...state,
        products: [
          ...state.products.map((product) =>
              product.id === action.payload.productId
                  ? { ...product, comments: [...product.comments, action.payload.id] }
                  : product
          ),
        ],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
                products: [
                  ...state.products.filter((card) => card.id !== action.payload),
                ],
      };
    default:
      return state;
  }
};
