// ----------Third-party libraries & modules----------
const mongoose = require("mongoose");

// ----------Measurement schema----------
const MeasurementSchema = new mongoose.Schema(
  {
    measurementCode: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    deviceId: {
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

module.exports = mongoose.model("Measurement", MeasurementSchema);
