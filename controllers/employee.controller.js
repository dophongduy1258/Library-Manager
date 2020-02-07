var Employee = require('../models/employee.model');

module.exports.home = (req,res)=>{
	res.render('home');
}

module.exports.mainEmployee = async (req,res)=>{
	// Employee.find().then((employees)=>{
	// 	res.render('employee/main-employee',{employees: employees
	// 	});
	// });
	var employees = await Employee.find();
	res.render('employee/main-employee',{employees:employees});

};


module.exports.postDeleteEmployee = async (req,res)=>{
	var btnDel= req.body.btnDel;
	// console.log(req.body.idBtn);
	// var a = await Book.findById({_id:id});
	await Employee.deleteOne({_id:btnDel});
	var employees = await Employee.find();
	res.render('employee/main-employee',{employees:employees});
}


module.exports.createEmployee = (req,res)=>{
	res.render('employee/create-employee');	
}

module.exports.postCreateEmployee = (req,res)=>{
	Employee.create([req.body]);
	res.redirect('/employee');
}

module.exports.editEmployee = async (req,res)=>{
	var id = req.params.id;
	var inforEmployee = await Employee.findById({_id:id});	
	res.render('employee/edit-employee',{inforEmployee:inforEmployee});
}

module.exports.postEditEmployee = async (req,res)=>{
	var id = req.body.id;
	var email = req.body.email;
	var password = req.body.password;
	var name = req.body.name;
	var age = req.body.age;
	var gender = req.body.gender;
	var phone = req.body.phone;
	var address = req.body.address;
	var office = req.body.office;	
	var workTime = req.body.workTime;	
	var salary = req.body.salary;	


	await Employee.updateOne({_id: id},{
		'email':email,
		'password':password,
		'name':name,
		'age':age,
		'gender':gender,
		'phone':phone,
		'address':address,
		'office':office,
		'workTime':workTime,
		'salary':salary
	});


	res.redirect('/employee');
}