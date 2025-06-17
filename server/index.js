const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const sellerRoutes = require("./routes/seller");
app.use("/api/seller", sellerRoutes);


  mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(5000, () => {
      console.log("Server started on port 5000");
      console.log("MongoDB connected");
    });
  })
  .catch((err) => console.log(err));


