const express = require("express");
const router = express.Router();
const Seller = require("../models/Seller");

const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "flipkart_sellers",
    allowed_formats: ["jpg", "png"],
  },
});

const upload = multer({ storage });

router.post("/", upload.single("productImage"), async (req, res) => {
  try {
    const seller = new Seller({
      ...req.body,
      productImage: req.file.path,
    });
    await seller.save();
    res.status(201).json(seller);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
