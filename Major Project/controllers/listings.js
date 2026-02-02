const Listing = require("../models/listing");

//Index Page
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
};

//New Listing

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

//Show Listing  
module.exports.showListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/show", { listing });
};

//Create Listing
module.exports.createListing = async (req, res,next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  // const newListing = new Listing(req.body.listing);
  // newListing.owner = req.user._id;
  // newListing.image = {url, filename};
  // await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

//Edit Listing
module.exports.renderEditForm = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/edit", { listing });
};

//Update Listing
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, req.body.listing);
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};


//Delete Listing

module.exports.destroyListing = async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    // console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  };