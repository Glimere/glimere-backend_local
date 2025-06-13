const mongoose = require("mongoose");

const creatorProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    apparelType: String,
    fullName: String,
    businessName: String,
    email: String,
    phone: String,
    address: String,
    country: String,
    dateOfBirth: Date,
    profilePicture: String,
    creatorType: [String],
    experienceYears: String,
    portfolioLinks: String,
    specializations: [String],
    technicalSkills: String,
    previousWork: String,
    clientTestimonials: String,
    leadTime: String,
    monthlyCapacity: String,
    pricingStructure: String,
    paymentMethod: String,
    shippingCapability: [String],
    returnPolicy: String,
    brandMission: String,
    authenticFashion: String,
    glimereExcitement: String,
    fashionInterests: [String],
    preferredMaterials: [String],
    whyGlimere: String,
    socialMedia: {
      facebook: String,
      instagram: String,
      twitter: String,
      linkedin: String,
      other: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CreatorProfile", creatorProfileSchema);
