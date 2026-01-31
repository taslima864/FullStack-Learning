const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const listingController = require("../controllers/listings.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

/* ------------------ ROUTES ------------------ */

router
  .route("/")
  // INDEX route
  .get(wrapAsync(listingController.index))
  // CREATE route
  // .post(
  //   isLoggedIn,
  //   validateListing,
  //   wrapAsync(listingController.createListing),
  // );
  .post(upload.single("listing[image][url]"), (req, res) => {
    res.send(req.file);
  });
// NEW route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  // SHOW route
  .get(wrapAsync(listingController.showListing))
  // UPDATE route
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing),
  )
  // EDIT route

  // DELETE route
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

module.exports = router;
