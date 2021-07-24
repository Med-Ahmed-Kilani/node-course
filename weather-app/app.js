const request = require("request");

const url = "{api key}";

request({ url: url, json: true }, (error, response) => {
  const weather = response.body;
  console.log(
    "It's currently " +
      weather.main.temp +
      " degree out. There is " +
      weather.clouds.all +
      "% change of rain."
  );
});
