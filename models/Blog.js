const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
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
        date: { type: Date, default: Date.now }

        
});
module.exports = mongoose.model("Blog", BlogSchema);    
