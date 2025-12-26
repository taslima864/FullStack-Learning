const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
const checkToken =
  ("/api",
  (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
      next();
    }
    throw new ExpressError(401, "ACCESS DENIED");
  });

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
  res.send("This is a random page");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.use((err, req, res, next) => {
  console.log("ERROR");
  res.send(err);
});

app.listen(8080, () => {
  console.log("Server listening to port 8080");
});
