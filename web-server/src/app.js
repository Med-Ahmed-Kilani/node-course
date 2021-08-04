const path = require("path");
const express = require("express");

const app = express();
const index = path.join(__dirname, "./public");
const help = path.join(__dirname, "./public/help");
const about = path.join(__dirname, "./public/about");
app.use(express.static(index));

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "There is no address provided!",
    });
  }
  res.send([
    { forecast: "sunny", location: "kairouan" },
    { forecast: "windy", location: "sousse" },
  ]);
});

app.listen(3000, () => {
  console.log("server is up on running!");
});
