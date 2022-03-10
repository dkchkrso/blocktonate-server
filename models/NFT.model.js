
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const NFTSchema = new Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String },
  imageURL: { type: String },
  users: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("NFT", NFTSchema);
