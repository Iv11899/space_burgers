import { useEffect, useReducer } from "react";
import { apiReducer } from "../reducers/api-data";
import {
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
  FETCH_API_ERROR,
} from "../actions/api-data";
import { baseUrl } from "../../utils/constants";

const useFetchIngredients = () => {
  const apiInitialState = {
    isLoading: false,
    hasError: false,
    data: [],
  };

  const [apiIngredientsState, apiDispatcher] = useReducer(
    apiReducer,
    apiInitialState
  );

  useEffect(() => {
    const getData = async () => {
      apiDispatcher({ type: FETCH_API_REQUEST });
      try {
        const res = await fetch(`${baseUrl}/ingredients`);
        if (res.ok) {
          const resData = await res.json();
          apiDispatcher({
            type: FETCH_API_SUCCESS,
            payload: resData.data,
          });
        } else return Promise.reject(`Что-то пошло не так: ${res.status}`);
      } catch (error) {
        apiDispatcher({
          type: FETCH_API_ERROR,
          payload: error,
        });
      }
    };
    getData();
  }, []);

  return apiIngredientsState;
};

export default useFetchIngredients;
