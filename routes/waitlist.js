const express = require("express");
const {
  createWaitlistEntry,
  getAllWaitlistEntries,
  getWaitlistEntryById,
  updateWaitlistEntryById,
  deleteWaitlistEntryById,
} = require("../controllers/waitlistController");

const router = express.Router();
router.post("/", createWaitlistEntry);
router.get("/", getAllWaitlistEntries);
router.get("/:id", getWaitlistEntryById);
router.put("/:id", updateWaitlistEntryById);
router.delete("/:id", deleteWaitlistEntryById);

module.exports = router;
