const request = require("request");

const mapbox = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiYWhtZWRraWxhbmkiLCJhIjoiY2tyaHQxbm52MDk2ODJvcnZ1ejBwYWtybiJ9.NjlNfOqXBs_cx85T3Iz-kQ&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to mapbox api!", undefined);
    } else if (body.features.length === 0) {
      callback("The is no such address!", undefined);
    } else {
      const lon = body.features[0].center[0];
      const lat = body.features[0].center[1];
      // console.log("longitude: " + lon + "\nlatitude: " + lat);
      console.log(body.features[0].place_name);
      callback(undefined, { lat, lon });
    }
  });
};

module.exports = mapbox;
