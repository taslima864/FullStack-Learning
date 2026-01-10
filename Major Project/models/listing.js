const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  type: String,

  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b"
          : v,
    },
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
