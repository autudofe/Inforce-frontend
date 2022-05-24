import { VISIBILITY_MODAL_WINDOW } from "./actions/actionTypes";

const defaultState = {
  visible: false,
};

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case VISIBILITY_MODAL_WINDOW:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
