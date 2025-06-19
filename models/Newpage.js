const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
        title: {
                type: String,
                
        },
        shotDescription: {
                type: String,
                
        },
        description: {
                type: String,
                
        },
        image: {
                type: String,
                
        },
        slug: {
                type: String,
                
        },
        date: { type: Date, default: Date.now }

        
});
module.exports = mongoose.model("Page", PageSchema);    
