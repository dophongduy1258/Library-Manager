var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: String,
	phone: Number,
	address: String,
	age: Number,
	gender: String,
	office: String,
	workTime: String,
	salary: Number
});

var Employee = mongoose.model('Employee',employeeSchema,'employees');
module.exports= Employee; 