const express = require("express");

const {
  createApparel,
  getApparels,
  getApparel,
  deleteApparel,
  updateApparel,
  searchApparels,
  getFeaturedApparels,
  getNewApparels,
  getTrendingApparels,
  getTopSellingApparels,
  updateNumberSold,
  updateViews,
} = require("../controllers/apparelController");

const router = express.Router();

router.get("/search", searchApparels);

//GET all Apparels
router.get("/", getApparels);
router.get("/featured", getFeaturedApparels);
router.get("/new", getNewApparels);
router.get("/trending", getTrendingApparels);
router.get("/top-selling", getTopSellingApparels);

//GET a single Apparel
router.get("/:id", getApparel);

//POST a new Apparel
router.post("/", createApparel);

//DELETE a new Apparel
router.delete("/:id", deleteApparel);

//UPDATE a new Apparel
router.patch("/:id", updateApparel);

router.patch("/:id/sold", updateNumberSold);
router.patch("/:id/views", updateViews);

module.exports = router;
