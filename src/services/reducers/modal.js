import { SET_MODAL_INGREDIENT, RESET_MODAL_INGREDIENT, RESET_ORDER_NUMBER } from "../actions/modal";

const initialState = {
  currentModalIngredient: {},
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MODAL_INGREDIENT:
      return { ...state, currentModalIngredient: payload };

    case RESET_MODAL_INGREDIENT:
      return {
        ...state,
        currentModalIngredient: initialState.currentModalIngredient,
      };

    case RESET_ORDER_NUMBER: {
      return { ...state, createdOrderNumber: initialState.createdOrderNumber };
    }

    default:
      return state;
  }
};

export default modalReducer