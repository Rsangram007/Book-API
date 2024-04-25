const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/User");
const bookRoutes = require("./Routes/book");
const app = express();
require('dotenv').config();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDb is Connected"))
  .catch((err) => {
    console.log(err.message);
  });

// Routes
app.use("/auth", userRoutes);
app.use("/books", bookRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
