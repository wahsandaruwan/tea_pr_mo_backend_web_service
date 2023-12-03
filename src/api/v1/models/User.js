// ----------Third-party libraries & modules----------
const mongoose = require("mongoose");

// ----------User schema----------
const UserSchema = new mongoose.Schema(
  {
    userCode: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
      required: true,
    },
    gender: {
      type: Boolean,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
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

module.exports = mongoose.model("User", UserSchema);
