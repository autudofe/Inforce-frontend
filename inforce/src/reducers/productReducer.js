import {
  ADD_PRODUCT,
  ADD_PRODUCTS_DATA,
  DELETE_PRODUCT_AND_COMMENTS,
} from "./actions/actionTypes";

const defaultState = {
  products: []
};

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_DATA:
      return { ...state, products: [...action.payload] };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case DELETE_PRODUCT_AND_COMMENTS:
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
