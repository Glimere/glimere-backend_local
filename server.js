require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const responseFormatter = require("./middlewares/formatter");
const path = require("path"); // Import the path module

// Import routes
const apparelRoutes = require("./routes/apparel");
const userRoutes = require("./routes/user"); // Add user routes
const authRoutes = require("./routes/auth");
const mainCategoryRoutes = require("./routes/mainCategory");
const subCategoryRoutes = require("./routes/subCategory");
const subSubCategoryRoutes = require("./routes/subSubCategory");
const measurementRoutes = require("./routes/measurement");
const sizeRoutes = require("./routes/size");
const brandRoutes = require("./routes/brand");
const modelRoutes = require("./routes/model");
const uploadRoutes = require("./routes/upload");
const materialRoutes = require("./routes/material");
const colorRoutes = require("./routes/color");
const waitlistRoutes = require("./routes/waitlist");
const reviewRoutes = require("./routes/review");
const cartRoutes = require("./routes/cart");

// Express app
const app = express();

// Middleware
app.use(express.json());

const allowedOrigins = [process.env.GLIMERE_SITE_URL, "http://localhost:3000"];

const corsOptions = {
  optionsSuccessStatus: 200,
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(responseFormatter);

// Default route for root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Glimere API!");
});

// Middleware to serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/apparels", apparelRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/main_category", mainCategoryRoutes);
app.use("/api/sub_category", subCategoryRoutes);
app.use("/api/sub_sub_category", subSubCategoryRoutes);
app.use("/api/measurement", measurementRoutes);
app.use("/api/sizes", sizeRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/models", modelRoutes);
app.use("/api/material", materialRoutes);
app.use("/api/color", colorRoutes);
app.use("/api/waitlist", waitlistRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/cart", cartRoutes);

// Connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & Listening on port ${process.env.PORT}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
