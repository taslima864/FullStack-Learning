const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const User = require("../models/user");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users.js");

// SIGNUP FORM
router.get("/signup", userController.renderSignupForm);

// SIGNUP LOGIC
router.post("/signup", wrapAsync(userController.signup));

// LOGIN FORM
router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login,
);

// LOGOUT ROUTE
router.get("/logout", userController.logout);

module.exports = router;
