const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema({
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
module.exports = mongoose.model("Destination", DestinationSchema);    
