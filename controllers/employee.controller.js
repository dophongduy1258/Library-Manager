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

module.exports.editEmployee = async (req,res)=>{
	var id = req.params.id;
	var infor = await Employee.findById({_id:id});	
	res.render('employee/edit-employee',{infor:infor});
}

module.exports.postEditEmployee = async (req,res)=>{	
	var updateInfor = await Employee.update(req.body);
	res.redirect('/employee',{employees:updateInfor});
}