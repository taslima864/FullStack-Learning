const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

const listingsRouter = require("./routers/listing");
const Review = require("./routers/review");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

/* DATABASE */
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch(console.log);

/* CONFIG */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", Review);

/* 404 */
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

/* ERROR HANDLER */
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error", { message });
});

/* SERVER */
app.listen(8080, () => {
  console.log("Server running on port 8080");
});
