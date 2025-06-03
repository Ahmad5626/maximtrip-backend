const mongoose = require("mongoose");

const GivenAmountSchema=new mongoose.Schema({ 
  amount: { type: Number },
  headline: { type: String },
  subHeadline: { type: String },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model("GivenAmount", GivenAmountSchema);