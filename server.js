require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const responseFormatter = require("./middlewares/formatter");
const path = require("path"); // Import the path module
const { Server } = require("socket.io"); // Import Socket.IO
const http = require("http"); // Import HTTP for wrapping Express

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
const wishlistRoutes = require("./routes/wishlist");
const shippingRoutes = require("./routes/shipping");
const cardRoutes = require("./routes/card");
const orderRoutes = require("./routes/order");
const shippingOptionRoutes = require("./routes/shippingOption");
const courierRoutes = require("./routes/courier");
const shippingFeeRoutes = require("./routes/shippingFee");
const notificationRoutes = require("./routes/notification");

// Express app
const app = express();
const server = http.createServer(app); 
const io = new Server(server, {
  cors: {
    origin: [process.env.GLIMERE_SITE_URL, "http://localhost:3000"], 
    methods: ["GET", "POST"],
  },
});

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
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/shipping", shippingRoutes);
app.use("/api/card", cardRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/shipping_option", shippingOptionRoutes);
app.use("/api/courier", courierRoutes);
app.use("/api/shipping_fee", shippingFeeRoutes);
app.use("/api/notification", notificationRoutes);

// WebSocket Logic
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Emit an event to the client on connection
  socket.emit("welcome", { message: "Connected to WebSocket Server!" });

  // Example: Broadcasting apparel updates
  socket.on("request_apparel_update", () => {
    console.log("Apparel update requested by:", socket.id);

    // Simulated data (replace with real database query or logic)
    const apparelData = {
      id: 1,
      name: "Stylish Jacket",
      price: 120.0,
    };

    io.emit("apparel_update", apparelData); // Broadcast update to all clients
  });

  // Disconnect logic
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Start server
    server.listen(process.env.PORT, () => {
      console.log(`Connected to db & Listening on port ${process.env.PORT}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
