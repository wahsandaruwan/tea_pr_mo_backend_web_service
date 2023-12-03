// ----------Third-party libraries & modules----------
const mongoose = require("mongoose");

// ----------Rule schema----------
const RuleSchema = new mongoose.Schema(
  {
    ruleCode: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model("Rule", RuleSchema);
