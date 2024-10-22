require("dotenv").config();
const mongoose = require('mongoose');
const Brand = require('../models/brandModel');
const { faker } = require('@faker-js/faker');

const uploadIds = [
    '6716e4f3698fa9da106a8055',
    '6716e4e1698fa9da106a8053',
    '6716e4c6698fa9da106a8051',
    '6716e4a6698fa9da106a804f',
    '6716e492698fa9da106a804d',
    '6716e476698fa9da106a804b'
];

const apparelIds = [
    '6705e6e6aa4ff71e1af50de1',
    '6705e6e6aa4ff71e1af50dea',
    '6705e6e6aa4ff71e1af50de9',
    '6705e6e6aa4ff71e1af50de8',
    '6705e6e6aa4ff71e1af50de7',
    '6705e6e6aa4ff71e1af50de6',
    '6705e6e6aa4ff71e1af50de5'
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

        for (let i = 0; i < 20; i++) {
            brands.push({
                name: faker.company.name(),
                description: faker.company.catchPhrase(),
                logo: getRandomElement(uploadIds),
                website: faker.internet.url(),
                country: faker.location.country(),
                established: faker.date.past({ years: 50 }).getFullYear(),
                contactInfo: {
                    email: faker.internet.email(),
                    phone: faker.phone.number(),
                    address: faker.location.streetAddress()
                },
                socialMediaLinks: {
                    facebook: faker.internet.url(),
                    twitter: faker.internet.url(),
                    instagram: faker.internet.url(),
                    linkedin: faker.internet.url()
                },
                apparels: getRandomElements(apparelIds, 3),
                views: faker.number.int({ min: 0, max: 1000 })
            });
        }

        for (const brandData of brands) {
            const brand = new Brand(brandData);
            await brand.save();
        }

        console.log('Brand seeding completed.');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding brands:', error);
        mongoose.connection.close();
    }
}

seedBrands();
