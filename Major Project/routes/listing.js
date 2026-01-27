const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

/* ------------------ ROUTES ------------------ */

// INDEX
router.get(
  "/",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
  }),
);

// NEW
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

// CREATE
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  }),
);

// SHOW
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id)
      .populate("reviews")
      .populate("owner");

    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }

    console.log(listing);
    res.render("listings/show", { listing });
  }),
);
// EDIT
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }
    res.render("listings/edit", { listing });
  }),
);

// UPDATE
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing);
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  }),
);

// DELETE
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    // console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  }),
);

module.exports = router;
