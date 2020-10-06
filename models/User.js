const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lname: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
    lowercase: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: { type: String },
  tokenExp: { type: Number },
});
const User = mongoose.model("User", userSchema);

module.exports = { User };
