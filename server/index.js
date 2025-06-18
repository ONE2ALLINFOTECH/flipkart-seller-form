require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // for application/json
app.use(express.urlencoded({ extended: true }));  // ✅ for form-data (text fields with files)

// Routes
const sellerRoutes = require("./routes/seller");
app.use("/api/seller", sellerRoutes);

// DB Connection
  mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("🚀 Server started on port 5000");
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
