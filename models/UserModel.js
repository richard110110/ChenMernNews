const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: "string", required: "" },
    email: { type: "string", required: "" },
    password: { type: "string", required: "" },
  },
  {
    timestamps: true,
  }
);


const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;