const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const session = require("express-session");
const flash = require("connect-flash");
const listingsRouter = require("./routes/listing");
const Review = require("./routes/review");
const { connect } = require("http2");

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

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
/* ROUTES */

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
