require("dotenv").config();
const mongoose = require("mongoose");
const Brand = require("../models/brandModel");
const { faker } = require("@faker-js/faker");

const uploadIds = [
  "6858b16ca033d87e37cf08c1",
  "6858b162a033d87e37cf08bf",
  "6858b156a033d87e37cf08bd",
  "6858b14da033d87e37cf08bb",
  "6858b142a033d87e37cf08b9",
  "6858b13aa033d87e37cf08b7",
  "6858b10aa033d87e37cf08b5",
];

const apparelIds = [
  // Insert valid ObjectId strings of Apparels if available
];

const userIds = [
  "6859a2251ea5e292c0982507",
  "6859a21f1ea5e292c0982504",
  "6859a2181ea5e292c0982501",
  "6859a2101ea5e292c09824fe",
  "6859a2071ea5e292c09824fb",
  "6859a1ec1ea5e292c09824f8",
  "685968a3b0240618b910781e",
  "68596811b0240618b910781b",
  "684e2111eb513403a7c22bf4",
  "684b9f05ebf1bc99a2951cbf",
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomElements(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const mongoUri = process.env.MONGO_URL;

async function seedBrands() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const brands = [];

    for (let i = 0; i < 10; i++) {
      const logoId = getRandomElement(uploadIds);
      const coverImageId = getRandomElement(uploadIds);
      const brandOwnerId = getRandomElement(userIds);

      brands.push({
        name: faker.company.name(),
        brand_owner: brandOwnerId,
        description: faker.company.catchPhrase(),
        logo: logoId,
        coverImage: coverImageId,
        website: faker.internet.url(),
        country: faker.location.country(),
        established: faker.date.past({ years: 50 }).getFullYear(),
        contactInfo: {
          email: faker.internet.email(),
          phone: faker.phone.number(),
          address: faker.location.streetAddress(),
        },
        isOfficial: faker.datatype.boolean(),
        socialMediaLinks: {
          facebook: faker.internet.url(),
          twitter: faker.internet.url(),
          instagram: faker.internet.url(),
          linkedin: faker.internet.url(),
        },
        apparels: getRandomElements(apparelIds, 3),
        views: faker.number.int({ min: 0, max: 1000 }),
      });
    }

    for (const brandData of brands) {
      const brand = new Brand(brandData);
      await brand.save();
    }

    console.log("Brand seeding completed.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding brands:", error);
    mongoose.connection.close();
  }
}

seedBrands();
