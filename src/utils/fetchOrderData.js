import { baseUrl, checkResponce } from "./constants";

export const fetchOrderDetails = (ingredients) => {

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients }),
  };

  return fetch(`${baseUrl}/orders`, requestOptions).then(checkResponce);
};

export const fetchIngredients = () => {

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  };
  
  return fetch(`${baseUrl}/ingredients`, requestOptions).then(checkResponce);
}