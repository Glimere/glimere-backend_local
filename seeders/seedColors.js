const mongoose = require("mongoose");
const Color = require("./../models/colorModel"); // Adjust the path to your Color model
const dotenv = require("dotenv");

dotenv.config();

const mongoUri = process.env.MONGO_URL;

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Array of 20 colors
const colors = [
  {
    name: "Crimson Red",
    variant: "Red",
    hexCode: "#DC143C",
    rgb: "220, 20, 60",
  },
  {
    name: "Sky Blue",
    variant: "Blue",
    hexCode: "#87CEEB",
    rgb: "135, 206, 235",
  },
  {
    name: "Emerald Green",
    variant: "Green",
    hexCode: "#50C878",
    rgb: "80, 200, 120",
  },
  {
    name: "Sunflower Yellow",
    variant: "Yellow",
    hexCode: "#FFC107",
    rgb: "255, 193, 7",
  },
  {
    name: "Midnight Black",
    variant: "Black",
    hexCode: "#000000",
    rgb: "0, 0, 0",
  },
  {
    name: "Pure White",
    variant: "White",
    hexCode: "#FFFFFF",
    rgb: "255, 255, 255",
  },
  {
    name: "Royal Purple",
    variant: "Purple",
    hexCode: "#6A0DAD",
    rgb: "106, 13, 173",
  },
  {
    name: "Coral Pink",
    variant: "Pink",
    hexCode: "#FF7F7F",
    rgb: "255, 127, 127",
  },
  {
    name: "Slate Gray",
    variant: "Gray",
    hexCode: "#708090",
    rgb: "112, 128, 144",
  },
  {
    name: "Tangerine Orange",
    variant: "Orange",
    hexCode: "#FF8C00",
    rgb: "255, 140, 0",
  },
  {
    name: "Turquoise",
    variant: "Blue",
    hexCode: "#40E0D0",
    rgb: "64, 224, 208",
  },
  {
    name: "Lime Green",
    variant: "Green",
    hexCode: "#32CD32",
    rgb: "50, 205, 50",
  },
  {
    name: "Lavender",
    variant: "Purple",
    hexCode: "#E6E6FA",
    rgb: "230, 230, 250",
  },
  {
    name: "Mustard Yellow",
    variant: "Yellow",
    hexCode: "#FFDB58",
    rgb: "255, 219, 88",
  },
  { name: "Navy Blue", variant: "Blue", hexCode: "#000080", rgb: "0, 0, 128" },
  {
    name: "Olive Green",
    variant: "Green",
    hexCode: "#808000",
    rgb: "128, 128, 0",
  },
  {
    name: "Rose Pink",
    variant: "Pink",
    hexCode: "#FF66CC",
    rgb: "255, 102, 204",
  },
  {
    name: "Charcoal Gray",
    variant: "Gray",
    hexCode: "#36454F",
    rgb: "54, 69, 79",
  },
  {
    name: "Burnt Orange",
    variant: "Orange",
    hexCode: "#CC5500",
    rgb: "204, 85, 0",
  },
  { name: "Teal", variant: "Blue", hexCode: "#008080", rgb: "0, 128, 128" },
];

// Seeder function
const seedColors = async () => {
  try {
    // Clear existing colors
    await Color.deleteMany({});
    console.log("Existing colors cleared");

    // Insert new colors
    await Color.insertMany(colors);
    console.log("20 colors seeded successfully");

    // Close the database connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding colors:", error);
    mongoose.connection.close();
  }
};

// Run the seeder
seedColors();
