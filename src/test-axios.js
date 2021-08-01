const axios = require("axios");

const endPoint = `https://restcountries.eu/rest/v2/name/taiwan`;

const fetchData = () => {
  return axios.get(endPoint);
};

fetchData().then((res) => console.log(res));
// .then((res) => res.json)
