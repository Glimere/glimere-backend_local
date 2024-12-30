require("dotenv").config();
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Review = require('../models/reviewModel'); // Adjust the path as needed

const userId = '66c64ca1c10067ac230c559e';
const apparelIds = [
  "676fb72f81cd35bfbc488f36",
  "676fb72f81cd35bfbc488f37",
  "676fb72f81cd35bfbc488f38",
  "676fb72f81cd35bfbc488f31",
  "676fb72f81cd35bfbc488f32",
  "676fb72f81cd35bfbc488f33",
  "676fb72f81cd35bfbc488f34",
  "676fb72f81cd35bfbc488f35",
  "676fb72f81cd35bfbc488f2c",
  "676fb72f81cd35bfbc488f2d",
  "676fb72f81cd35bfbc488f2e",
  "676fb72f81cd35bfbc488f2f",
  "676fb72f81cd35bfbc488f30",
  "676fb72f81cd35bfbc488f27",
  "676fb72f81cd35bfbc488f28",
  "676fb72f81cd35bfbc488f29",
  "676fb72f81cd35bfbc488f2a",
  "676fb72f81cd35bfbc488f2b",
  "676fb72f81cd35bfbc488f22",
  "676fb72f81cd35bfbc488f23",
  "676fb72f81cd35bfbc488f24",
  "676fb72f81cd35bfbc488f25",
  "676fb72f81cd35bfbc488f26",
  "676fb72f81cd35bfbc488f1c",
  "676fb72f81cd35bfbc488f1d",
  "676fb72f81cd35bfbc488f1e",
  "676fb72f81cd35bfbc488f1f",
  "676fb72f81cd35bfbc488f20",
  "676fb72f81cd35bfbc488f21",
  "676fb72f81cd35bfbc488f16",
  "676fb72f81cd35bfbc488f17",
  "676fb72f81cd35bfbc488f18",
  "676fb72f81cd35bfbc488f19",
  "676fb72f81cd35bfbc488f1a",
  "676fb72f81cd35bfbc488f1b",
  "676fb72f81cd35bfbc488f11",
  "676fb72f81cd35bfbc488f12",
  "676fb72f81cd35bfbc488f13",
  "676fb72f81cd35bfbc488f14",
  "676fb72f81cd35bfbc488f15",
  "676fb72f81cd35bfbc488f0e",
  "676fb72f81cd35bfbc488f0f",
  "676fb72f81cd35bfbc488f10",
  "676fb72f81cd35bfbc488f0b",
  "676fb72f81cd35bfbc488f0c",
  "676fb72f81cd35bfbc488f0d",
  "676fb72f81cd35bfbc488f08",
  "676fb72f81cd35bfbc488f09",
  "676fb72f81cd35bfbc488f0a",
  "676fb72f81cd35bfbc488f07"
];

// Connect to the database
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
    seedReviews();
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

const seedReviews = async () => {
  try {
    await Review.deleteMany({}); // Clear existing reviews

    const reviews = [];

    for (let i = 0; i < 50; i++) {
      const review = new Review({
        rating: faker.number.int({ min: 1, max: 5 }),
        comment: faker.lorem.sentence(),
        user: userId,
        apparel: faker.helpers.arrayElement(apparelIds)
      });

      reviews.push(review);
    }

    await Review.insertMany(reviews);
    console.log('50 reviews seeded successfully');
    mongoose.disconnect();
  } catch (err) {
    console.error('Error seeding reviews:', err);
    mongoose.disconnect();
  }
};
