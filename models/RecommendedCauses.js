const mongoose = require("mongoose");

const RecommendedCausesSchema = new mongoose.Schema({
 headline: { type: String },
 url: { type: String },
 
 
});

module.exports = mongoose.model("RecommendedCauses", RecommendedCausesSchema);