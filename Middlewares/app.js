const express = require("express");
const app = express();

const checkToken = ("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED!");
});

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
});

app.get("/api" ,checkToken, (req,res) => {
  res.send("data");
})

app.get("/random", (req, res) => {
  res.send("This is a random page");
});

app.get((req,res) =>{
res.status(404).send("Page not found");
})

app.listen(8080, () => {
  console.log("Server listening to port 8080");
});
