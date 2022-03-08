const router = require("express").Router();
const mongoose = require("mongoose");

const NFT = require("../models/NFT.model");

// GET /api/nft -  Retrieves all of the nfts
router.get("/nfts", (req, res, next) => {
  NFT.find()
    .populate("users")
    .then((allNFTs) => res.json(allNFTs))
    .catch((err) => res.json(err));
});

//  POST /api/nft  -  Creates a new nft
router.post("/nft", (req, res, next) => {
  const { title, description, imageURL } = req.body;

  NFT.create({
    title,
    description,
    imageURL,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/nft/:nftId -  Retrieves a specific nft by id
router.get("/nft/:nftId", (req, res, next) => {
  const { nftId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(nftId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each Project document has `tasks` array holding `_id`s of Task documents
  // We use .populate() method to get swap the `_id`s for the actual Task documents
  NFT.findById(nftId)
    .populate("users")
    .then((nft) => res.status(200).json(nft))
    .catch((error) => res.json(error));
});

// PUT  /api/nfts/:nftId  -  Updates a specific nft by id
router.put("/nfts/:nftId", (req, res, next) => {
  const { nftId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(nftId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  NFT.findByIdAndUpdate(nftId, req.body, { new: true })
    .then((updatedNft) => res.json(updatedNft))
    .catch((error) => res.json(error));
});

// DELETE  /api/nfts/:nftId  -  Deletes a specific nft by id
router.delete("/nfts/:nftId", (req, res, next) => {
  const { nftId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(nftId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  NFT.findByIdAndRemove(nftId)
    .then(() =>
      res.json({
        message: `NFT with ${nftId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
