const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  type: String,
  image: {
    type: String,
    default:
      "https://masterhost.ca/fort-lauderdale-beach-airbnb-profitability-a-comprehensive-guide/",
    set: (v) =>
      v === ""
        ? "https://masterhost.ca/fort-lauderdale-beach-airbnb-profitability-a-comprehensive-guide/"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
