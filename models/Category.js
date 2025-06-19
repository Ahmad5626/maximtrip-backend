const mongoose = require("mongoose");

const CategorySchema=new mongoose.Schema({
    categoryName:{type:String,},
    image:{type:String},
    headline:{type:String},
    story:{type:String}
})

module.exports=mongoose.model("Category",CategorySchema)