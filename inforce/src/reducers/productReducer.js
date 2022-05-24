import { ADD_PRODUCTS, DELETE_PRODUCT } from "./actions/actionTypes";

const defaultState = {
  products: [
    {
      id: 1,
      imageUrl: "some url here",
      name: "Product name",
      count: 4,
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: ["CommentModel", "CommentModel"],
    },
    {
      id: 2,
      imageUrl: "some url here",
      name: "Product name2",
      count: 4,
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: ["CommentModel", "CommentModel"],
    },
  ],
};

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: [...state.products, action.payload] };
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
