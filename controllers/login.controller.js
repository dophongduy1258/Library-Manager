// require('dotenv').config();
var Employee = require('../models/employee.model');


module.exports.index = (req,res)=>{

	res.render('login');
}

module.exports.postIndex = async (req,res)=>{
	var email = req.body.email;
	var password = req.body.password;
	var emailMG = await Employee.find({email:email});
	var obj = emailMG.find(s=>{
		return s.email
	});
	// var obj = emailMG.find(e=>{return e.email});
	if(!obj.email){
		res.render('login',{
			errors: ['email or password does not exist.'],
			values: req.body		
		});
		return;
	}
	if(!obj.password){
		res.render('login',{
			errors: ['email or password does not exist.'],
			values: req.body		
		});
		return;
	}
	res.cookie('userID',obj._id);	
	res.redirect('/employee');

};	