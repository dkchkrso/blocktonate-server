
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const NFTSchema = new Schema({
  title: String,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("NFT", taskSchema);
