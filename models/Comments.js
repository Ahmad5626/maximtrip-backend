const mongoose=require('mongoose');

const CommneSchema =new mongoose.Schema({
    comment:{type:String},
    user:{type:String},
    date:{type:Date}
})


module.exports=mongoose.model('Comments',CommneSchema)