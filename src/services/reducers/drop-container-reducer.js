import {
  SET_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
  INCREASE_ITEM,
  SET_TOTAL_PRICE,
  RESET_TOTAL_PRICE,
  SET_BUNS,
  SET_ORDER_INGREDIENTS,
} from "../actions/drop-container";

const initialState = {
  constructorElements: [],
  qty: [],
  constructorIngredients: [],
  constructorBuns: [],
  totalPrice: 0,
  buns: {},
  orderIngredients: [],
};

const dropContainerReducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case SET_CONSTRUCTOR_ELEMENT:
      return {
        ...state,
        constructorElements: [...state.constructorElements, payload],
      };
    case INCREASE_ITEM:
      return {
        ...state,
        qty: [...state.orderIngredients].filter((item) => item._id !== id)
          .length,
      };

    case SET_BUNS:
      return { ...state, buns: [payload] };

    case REMOVE_CONSTRUCTOR_ELEMENT:
      return {
        ...state,
        constructorElements: [...state.constructorElements].filter(
          (item) => item._id !== id
        ),
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.constructorElements.length
          ? [...state.constructorElements]
            .map((el) => el.price)
            .reduce((a, b) => a + b) +
          state.buns[0].price * 2
          : state.buns[0].price * 2,
      };

    case RESET_TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: initialState.totalPrice,
      };
    }

    case SET_ORDER_INGREDIENTS:
      return {
        ...state,
        orderIngredients: state.constructorElements.concat(state.buns, state.buns)
      }

    default:
      return state;
  }
};

export default dropContainerReducer;
