var mongoose = require('mongoose');

var employeeSchema = new mongoose.Shema({
	email: String,
	password: String,
	name: String,
	phone: Number,
	address: String,
	age: Number,
	gender: Boolean,
	office: String,
	work-time: String,
	salary: Number
});

var Employee = mongoose.model('Employee',employeeSchema,'employees');
module.exports= Employee; 