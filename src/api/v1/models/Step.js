// ----------Third-party libraries & modules----------
const mongoose = require("mongoose");

// ----------Step schema----------
const StepSchema = new mongoose.Schema(
  {
    stepCode: {
      type: String,
      required: true,
    },
    stepName: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    assignedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
    ],
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

module.exports = mongoose.model("Step", StepSchema);
