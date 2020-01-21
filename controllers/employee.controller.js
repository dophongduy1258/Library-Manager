var Employee = require('../models/employee.model');

module.exports.mainEmployee = (req,res)=>{
	Employee.find().then((employees)=>{
		res.render('employee/main-employee',{employees: employees
		});
	});
};

module.exports.createEmployee = (req,res)=>{
	res.render('employee/create-employee');	
}

module.exports.postCreateEmployee = (req,res)=>{
	Employee.create([req.body]);
	res.redirect('/employee');
}

module.exports.editEmployee = (req,res)=>{
	res.render('employee/edit-employee');
}