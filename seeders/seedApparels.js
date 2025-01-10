require("dotenv").config();
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const Apparel = require("../models/apparelModel"); // Adjust the path based on your structure
const Review = require("../models/reviewModel"); // Add the review model
const User = require("../models/userModel");

// Replace these with your actual ObjectIds
const brandId = "6716ea55f7dfc798cf8478c4";
const mainCategoryId = "66fba3b20bf4f4e05a6aa8ec";
const subCategoryIds = ["66fbad81324627adb1497fa2"];
const subSubcategoryIds = ["66fbadc4324627adb1497fa4"];
const materialIds = ["66fda5bc2ae8e868432a68b8"];
const modelIds = [
  "67804f56f16f5be16d99cfaa",
  "678050d03944aa54f4ea090f",
  "678051263944aa54f4ea0914",
  "678051503944aa54f4ea0919",
  "6780519e3944aa54f4ea091e",
];
const sizingTypeId = "66fb847b8ec98b35c818cf97";
const sizeIds = [
  "66fb847c8ec98b35c818d0a7",
  "66fb847c8ec98b35c818d093",
  "66fb847c8ec98b35c818d07f",
  "66fb847c8ec98b35c818d06b",
  "66fb847c8ec98b35c818d057",
];

const mongoUri = process.env.MONGO_URL;

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const seedApparels = async (numRecords) => {
  // Connect to the database
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const users = await User.find().select("_id");
  if (users.length === 0) {
    throw new Error("No users found in the database. Add some users first.");
  }

  const userIds = users.map((user) => user._id);

  const apparels = [];
  const apparelTypes = [
    "dresses",
    "top",
    "bottom",
    "full wears",
    "outer wears",
    "accessories",
  ];

  // Generate random data
  for (let i = 0; i < numRecords; i++) {
    apparels.push({
      apparel_name: faker.commerce.productName(),
      apparel_desc: faker.lorem.sentence(),
      apparel_images: ["6705d670bba0c62af97a8efc", "6705d64cbba0c62af97a8efa"],
      apparel_price: parseFloat(faker.commerce.price()),
      discounted_price: parseFloat(faker.commerce.price()),
      discount_percentage: faker.number.int({ min: 5, max: 50 }), // Corrected method
      discount_start_date: faker.date.past(),
      discount_end_date: faker.date.future(),
      is_discounted: faker.datatype.boolean(),
      apparel_type: faker.helpers.arrayElement(apparelTypes), // Random apparel type from the fixed list
      brand: brandId,
      main_category: mainCategoryId,
      sub_categories: subCategoryIds,
      sub_subcategories: subSubcategoryIds,
      materials: materialIds,
      models: [getRandomElement(modelIds)],
      sizing_type: sizingTypeId,
      sizes: sizeIds,
      views: faker.number.int({ min: 0, max: 1000 }), // Random number of views
      is_featured: faker.datatype.boolean(), // Random boolean for featured
      number_sold: faker.number.int({ min: 0, max: 1000 }), // Random number of sold items
    });
  }

  try {
    // Remove existing data
    await Apparel.deleteMany({});
    await Review.deleteMany({});

    // Insert sample data
    const insertedApparels = await Apparel.insertMany(apparels);

    const reviews = [];
    insertedApparels.forEach((apparel) => {
      const numReviews = faker.number.int({ min: 1, max: 10 });
      for (let j = 0; j < numReviews; j++) {
        reviews.push({
          apparel: apparel._id,
          user: getRandomElement(userIds),
          rating: faker.number.int({ min: 1, max: 5 }),
          comment: faker.lorem.sentence(),
        });
      }
    });

    await Review.insertMany(reviews);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Call the seed function with the number of records you want to create
seedApparels(50); // Example: generate 50 records
