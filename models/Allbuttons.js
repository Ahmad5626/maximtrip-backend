const mongoose = require("mongoose");

const AllbuttonsSchema = new mongoose.Schema({
    heroSectionButton: { type: String },
    honorTheirButton : { type: String },
    fundraiseWithFaithButton : { type: String },
    
})


module.exports = mongoose.model("Allbuttons", AllbuttonsSchema);