import {
  ADD_COMMENT,
  ADD_COMMENTS_PRODUCT,
  ADD_PRODUCT, DELETE_COMMENT, DELETE_COMMENTS_PRODUCT,
  DELETE_PRODUCT,
  EDIT_COMMENT, EDIT_COMMENTS, EDIT_COMMENTS_PRODUCT,
  EDIT_PRODUCT,
} from "./actions/actionTypes";

const defaultState = {
  products: [
    {
      id: 1,
      imageUrl: "https://picsum.photos/id/1/300/300",
      name: "Avocado",
      count: 2,
      size: {
        width: 300,
        height: 600,
      },
      weight: "1200g",
      comments: [1, 2],
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/id/11/300/300",
      name: "Orange",
      count: 7,
      size: {
        width: 10,
        height: 10,
      },
      weight: "1200g",
      comments: [],
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/id/111/300/300",
      name: "Banana",
      count: 13,
      size: {
        width: 200,
        height: 400,
      },
      weight: "300g",
      comments: [1, 2],
    },
  ],
};

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
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
