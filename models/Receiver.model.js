const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const receiverSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  walletAddress: { type: String },
  askingAmount: { type: Number, required: true },
  receivedAmount: { type: Number },
  currency: { type: String, required: true },
  imageURL: { type: String },
  //categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  // geoRegion: String + Enum
});

module.exports = model("Receiver", receiverSchema);
