import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

response
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
