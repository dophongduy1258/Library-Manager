var Employee = require('../models/employee.model');


module.exports.requireLogin = async (req,res,next)=>{
	var idMG = await Employee.findById({_id:req.cookies.userID});

	// if(!req.cookies.userID){
	// 	res.redirect('login');
	// 	return;
	// }
	// if(req.cookies.userID !== idMG._id){
	// 	res.redirect('login');
	// 	return;
	// }
	// next();
}