var mongoose = require('../mongoose');
var schemaAdmin = mongoose.Schema({
	username:{
		type:String,
		unique:true,
		required:true
	},
	password:{
		type:String,
		unique:false,
		required:true
	}
},{versionKey:false});
var Admin = mongoose.model("Admin",schemaAdmin);
module.exports = Admin;