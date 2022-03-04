const router = require("express").Router();
const mongoose = require("mongoose");

const Receiver = require("../models/Receiver.model");

// GET /api/receivers -  Retrieves all of the receivers
router.get("/receivers", (req, res, next) => {
  Receiver.find()
    // .populate('tasks')
    .then((allReceivers) => res.json(allReceivers))
    .catch((err) => res.json(err));
});

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
    imageURL,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/receivers/:receiverId -  Retrieves a specific receiver by id
router.get("/receivers/:receiverId", (req, res, next) => {
  const { receiverId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(receiverId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  // Each Project document has `tasks` array holding `_id`s of Task documents
  // We use .populate() method to get swap the `_id`s for the actual Task documents
  Receiver.findById(receiverId)
    // .populate('tasks')
    .then((receiver) => res.status(200).json(receiver))
    .catch((error) => res.json(error));
});

// PUT  /api/receivers/:receiverId  -  Updates a specific receiver by id
router.put("/receivers/:receiverId", (req, res, next) => {
  const { receiverId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(receiverId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Receiver.findByIdAndUpdate(receiverId, req.body, { new: true })
    .then((updatedReceiver) => res.json(updatedReceiver))
    .catch((error) => res.json(error));
});

// DELETE  /api/receivers/:receiverId  -  Deletes a specific receiver by id
router.delete("/receivers/:receiverId", (req, res, next) => {
  const { receiverId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(receiverId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Receiver.findByIdAndRemove(receiverId)
    .then(() =>
      res.json({
        message: `Receiver with ${receiverId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
