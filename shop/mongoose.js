var mongoose=require('mongoose');
mongoose.connect('mongodb://user:user45@ds235053.mlab.com:35053/shopangular');
console.log("mongodb connect...")
module.exports=mongoose;