const request = require("request");
const mapbox = require("./utils/mapbox");
const weather = require("./utils/weather");

if (process.argv[2]) {
  mapbox(process.argv[2], (error, data) => {
    if (error) {
      console.error("Error: " + error);
    } else {
      weather(data, (error, data) => {
        if (error) {
          console.error("Error: ", error);
        } else {
          console.log(data);
        }
      });
    }
  });
} else {
  console.log("You should provide a city name !");
}
