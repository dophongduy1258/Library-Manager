var Employee = require('../models/employee.model');


module.exports.index = async (req,res)=>{
	var employee = await Employee.find();
	console.log(employee);
	res.render('login');
}

module.exports.postIndex = (req,res)=>{
}	