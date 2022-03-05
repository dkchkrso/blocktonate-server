const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const receiverSchema = new Schema({
  name: String,
  description: String,
  walletAddress: String,
  askingAmount: Number,
  receivedAmount: Number,
  currency: String,
  imageURL: String,
  //categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  // geoRegion: String + Enum
});

module.exports = model("Receiver", receiverSchema);
