const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  shopName: String,
  gstNumber: String,
  address: String,
  productImage: String,
});

module.exports = mongoose.model("Seller", sellerSchema);
