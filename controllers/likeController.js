// controllers/likeController.js
const Like = require("../models/likeModel");
const Apparel = require("../models/apparelModel");

likeApparel = async (req, res) => {
  const { userId, apparelId } = req.body;
  try {
    const apparel = await Apparel.findById(apparelId);
    if (!apparel) return res.status(404).send("Apparel not found");

    const existingLike = await Like.findOne({ userId, apparelId });
    if (existingLike)
      return res.status(400).send("You have already liked this apparel");

    const newLike = new Like({ userId, apparelId });
    await newLike.save();
    res.status(201).json(newLike);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

unlikeApparel = async (req, res) => {
  const { userId, apparelId } = req.body;
  try {
    const like = await Like.findOneAndDelete({ userId, apparelId });
    if (!like) return res.status(404).send("Like not found");
    res.status(200).send("Apparel unliked");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

getApparelLikes = async (req, res) => {
  try {
    const likes = await Like.find({ apparelId: req.params.apparelId }).populate(
      "userId"
    );
    res.status(200).json(likes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  likeApparel,
  unlikeApparel,
  getApparelLikes,
};
