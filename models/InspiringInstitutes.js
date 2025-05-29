const mongoose = require("mongoose");

const inspiringInstitutesSchema = new mongoose.Schema({
 headline: { type: String },
 subHeadline: { type: String },
 url: { type: String },
 instituteImage: { type: String },
});

module.exports = mongoose.model("InspiringInstitutes", inspiringInstitutesSchema);