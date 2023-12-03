// ----------Third-party libraries & modules----------
const mongoose = require("mongoose");

// ----------Device schema----------
const DeviceSchema = new mongoose.Schema(
  {
    deviceCode: {
      type: String,
      required: true,
    },
    deviceType: {
      type: String,
      required: true,
    },
    deviceImage: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    stepId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    dateCreated: {
      type: String,
      required: true,
    },
    timeCreated: {
      type: String,
      required: true,
    },
    dateUpdated: {
      type: String,
      required: true,
    },
    timeUpdated: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Device", DeviceSchema);
