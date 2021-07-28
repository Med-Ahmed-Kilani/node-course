const request = require("request");

const weather = ({ lat, lon }, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=413c499ab7f877c288f7b56b32c24e47&units=metric";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather api!", undefined);
    } else if (body.cod !== 200) {
      callback(body.message, undefined);
    } else {
      callback(
        undefined,
        "It's currently " +
          body.main.temp +
          " degree out. There is " +
          body.clouds.all +
          "% change of rain."
      );
    }
  });
};

module.exports = weather;
