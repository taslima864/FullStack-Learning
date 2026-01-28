const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const listingController = require("../controllers/listings.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

/* ------------------ ROUTES ------------------ */

// INDEX route
router.get("/", wrapAsync(listingController.index));

// NEW route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// SHOW route
router.get("/:id", wrapAsync(listingController.showListing));

// CREATE route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(listingController.createListing),
);

// EDIT route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

// UPDATE route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingController.updateListing),
);

// DELETE route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing),
);

module.exports = router;
