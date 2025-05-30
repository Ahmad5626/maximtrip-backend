const mongoose = require("mongoose");

const RecommendedCausesSchema = new mongoose.Schema({
 livelihoodforUlama: { type: String },
 constructionSupportforMadrasas: { type: String },
 studentEducation: { type: String },
 helpPoor: { type: String },
 helpOrphans: { type: String },
medicalRelief: { type: String },
 constructionSupportforMasjids: { type: String },
});

module.exports = mongoose.model("RecommendedCauses", RecommendedCausesSchema);