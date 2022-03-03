const router = require("express").Router();
const mongoose = require("mongoose");

const Receiver = require("../models/Receiver.model");

//  POST /api/receiver  -  Creates a new receiver
router.post("/receiver", (req, res, next) => {
  const {
    name,
    description,
    walletAddress,
    askingAmount,
    receivedAmount,
    currency,
    imageURL,
  } = req.body;

  Receiver.create({
    name,
    description,
    walletAddress,
    askingAmount,
    receivedAmount,
    currency,
    imageURL
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
