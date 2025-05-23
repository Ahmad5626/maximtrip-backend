const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  password: String,
  RegisteredType: String,
  Gender : String,
  dateOfBirth: String,
  State: String,
  Address: String,
  Pincode: String,
  maritalStatus: String,
  mobileNumber: String,
  District: String,
  PANCardNo: String,
 
  
});

module.exports = mongoose.model("User", UserSchema);