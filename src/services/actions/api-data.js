import { fetchIngredients, fetchOrderDetails } from "../../utils/fetchOrderData";

export const FETCH_API_REQUEST = "FETCH_API_REQUEST";
export const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
export const FETCH_API_ERROR = "FETCH_API_ERROR";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const GET_ORDER_NUMBER_REQUEST = "GET_ORDER_NUMBER_REQUEST";
export const GET_ORDER_NUMBER_SUCCESS = "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_FAILED = "GET_ORDER_NUMBER_FAILED";

export function getIngredients() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    fetchIngredients()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({ type: GET_INGREDIENTS_FAILED });
        }
      })
      .catch(() =>
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      );
  };
}

export function getOrderNumber(ingredients) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_NUMBER_REQUEST });
    fetchOrderDetails(ingredients)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_NUMBER_SUCCESS,
            payload: res.order.number,
          });
        } else {
          dispatch({ type: GET_ORDER_NUMBER_FAILED });
        }
      })
      .catch(() =>
        dispatch({
          type: GET_ORDER_NUMBER_FAILED,
        })
      );
  };
}