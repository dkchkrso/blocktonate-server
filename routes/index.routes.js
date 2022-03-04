const router = require("express").Router();
const authRoutes = require("./auth.routes");
const Receiver = require("../models/Receiver.model");

/* GET home page */
// GET /api/ -  Retrieves all of the receivers

router.get("/", (req, res, next) => {
  Receiver.find()
    // .populate('tasks')
    .then((allReceivers) => res.json(allReceivers))
    .catch((err) => res.json(err));
});



router.use("/auth", authRoutes);

module.exports = router;
