import {
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
  FETCH_API_ERROR,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_ORDER_NUMBER_REQUEST,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_FAILED,
} from "../actions/api-data";

const initialState = {
  allIngredients: [],
  allIngredientsRequest: false,
  allIngredientsFailed: false,

  createdOrderNumber: null,
  createdOrderNumberRequest: false,
  createdOrderNumberFailed: false,
};

const apiDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state, allIngredientsRequest: true };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        allIngredients: payload,
        allIngredientsRequest: false,
        allIngredientsFailed: false,
      };
    case GET_INGREDIENTS_FAILED:
      return { ...state, allIngredientsFailed: true };

    case GET_ORDER_NUMBER_REQUEST: {
      return { ...state, createdOrderNumberRequest: true };
    }

    case GET_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        createdOrderNumberRequest: false,
        createdOrderNumberFailed: false,
        createdOrderNumber: payload,
      };
    }

    case GET_ORDER_NUMBER_FAILED: {
      return { ...state, createdOrderNumberFailed: true };
    }

    default:
      return state;
  }
};

export default apiDataReducer;

export function apiReducer(state, { type, payload }) {
  switch (type) {
    case FETCH_API_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }
    case FETCH_API_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        data: payload,
      };
    }
    case FETCH_API_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: payload,
      };
    }
    default:
      return state;
  }
}
