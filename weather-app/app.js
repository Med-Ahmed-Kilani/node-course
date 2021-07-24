const request = require("request");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Kairouan&appid=413c499ab7f877c288f7b56b32c24e47";

request({ url: url, json: true }, (error, response) => {
  console.log(response.body);
});
