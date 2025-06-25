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

/**
 * @swagger
 * tags:
 *   name: Apparels
 *   description: Apparel management and browsing
 */

/**
 * @swagger
 * /api/apparels/search:
 *   get:
 *     summary: Search apparels
 *     tags: [Apparels]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search keyword
 *     responses:
 *       200:
 *         description: List of matching apparels
 */
router.get("/search", searchApparels);

/**
 * @swagger
 * /api/apparels:
 *   get:
 *     summary: Get all apparels
 *     tags: [Apparels]
 *     responses:
 *       200:
 *         description: List of all apparels
 */
router.get("/", getApparels);

/**
 * @swagger
 * /api/apparels/featured:
 *   get:
 *     summary: Get featured apparels
 *     tags: [Apparels]
 *     responses:
 *       200:
 *         description: List of featured apparels
 */
router.get("/featured", getFeaturedApparels);

/**
 * @swagger
 * /api/apparels/new:
 *   get:
 *     summary: Get new apparels
 *     tags: [Apparels]
 *     responses:
 *       200:
 *         description: List of new apparels
 */
router.get("/new", getNewApparels);

/**
 * @swagger
 * /api/apparels/trending:
 *   get:
 *     summary: Get trending apparels
 *     tags: [Apparels]
 *     responses:
 *       200:
 *         description: List of trending apparels
 */
router.get("/trending", getTrendingApparels);

/**
 * @swagger
 * /api/apparels/top-selling:
 *   get:
 *     summary: Get top-selling apparels
 *     tags: [Apparels]
 *     responses:
 *       200:
 *         description: List of top-selling apparels
 */
router.get("/top-selling", getTopSellingApparels);

/**
 * @swagger
 * /api/apparels/{id}:
 *   get:
 *     summary: Get an apparel by ID
 *     tags: [Apparels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Apparel ID
 *     responses:
 *       200:
 *         description: Apparel data
 *       404:
 *         description: Apparel not found
 */
router.get("/:id", getApparel);

/**
 * @swagger
 * /api/apparels:
 *   post:
 *     summary: Create a new apparel
 *     tags: [Apparels]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Apparel'
 *     responses:
 *       201:
 *         description: Apparel created
 */
router.post("/", createApparel);

/**
 * @swagger
 * /api/apparels/{id}:
 *   delete:
 *     summary: Delete an apparel
 *     tags: [Apparels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Apparel ID
 *     responses:
 *       200:
 *         description: Apparel deleted
 *       404:
 *         description: Apparel not found
 */
router.delete("/:id", deleteApparel);

/**
 * @swagger
 * /api/apparels/{id}:
 *   patch:
 *     summary: Update an apparel
 *     tags: [Apparels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Apparel ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Apparel'
 *     responses:
 *       200:
 *         description: Apparel updated
 */
router.patch("/:id", updateApparel);

/**
 * @swagger
 * /api/apparels/{id}/sold:
 *   patch:
 *     summary: Update number sold for an apparel
 *     tags: [Apparels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Apparel ID
 *     responses:
 *       200:
 *         description: Number sold updated
 */
router.patch("/:id/sold", updateNumberSold);

/**
 * @swagger
 * /api/apparels/{id}/views:
 *   patch:
 *     summary: Update view count for an apparel
 *     tags: [Apparels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Apparel ID
 *     responses:
 *       200:
 *         description: Views updated
 */
router.patch("/:id/views", updateViews);


module.exports = router;
