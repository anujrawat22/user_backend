const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  profile_picture: { type: String },
  name: { type: String },
  bio: { type: String },
  phone: { type: Number },
  email: { type: String,required : true },
  password: { type: String , required : true},
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };
