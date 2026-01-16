const express = require("express");
const router = express.Router();

const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../schema");

/* ------------------ VALIDATION ------------------ */
const validateListing = (req, res, next) => {
  // normalize image object
  if (!req.body.listing.image) {
    req.body.listing.image = {};
  }

  const { error } = listingSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, msg);
  }
  next();
};

/* ------------------ ROUTES ------------------ */

// INDEX
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
  })
);

// NEW
router.get("/new", (req, res) => {
  res.render("listings/new");
});

// CREATE
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  })
);

// SHOW
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id).populate("reviews");
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/show", { listing });
  })
);

// EDIT
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/edit", { listing });
  })
);

// UPDATE
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body.listing, {
      runValidators: true,
    });
    res.redirect(`/listings/${req.params.id}`);
  })
);

// DELETE
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    res.redirect("/listings");
  })
);

module.exports = router;
