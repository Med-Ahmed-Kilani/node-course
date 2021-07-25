const request = require("request");

const weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Kairouan&appid=413c499ab7f877c288f7b56b32c24e47&units=metric";

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather api!");
  } else if (response.body.cod !== 200) {
    console.log(response.body.message);
  } else {
    console.log(
      "It's currently " +
        response.body.main.temp +
        " degree out. There is " +
        response.body.clouds.all +
        "% change of rain."
    );
  }
});

const geocodingUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Kairouan.json?access_token=pk.eyJ1IjoiYWhtZWRraWxhbmkiLCJhIjoiY2tyaHQxbm52MDk2ODJvcnZ1ejBwYWtybiJ9.NjlNfOqXBs_cx85T3Iz-kQ&limit=1";

request({ url: geocodingUrl, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to mapbox api!");
  } else if (response.body.features.length === 0) {
    console.log("The is no such address!");
  } else {
    console.log(
      "longitude: " +
        response.body.features[0].center[0] +
        "\nlatitude: " +
        response.body.features[0].center[1]
    );
  }
});
