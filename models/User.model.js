const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  profilePic: { type: String },
  supported: [{ type: Schema.Types.ObjectId, ref: "Receiver" }],
  supporterFav: [{ type: Schema.Types.ObjectId, ref: "Receiver" }],
  Contributed: { type: Number },
  NFTs: [{ type: Schema.Types.ObjectId, ref: "NFT" }],
});

module.exports = model("User", userSchema);
