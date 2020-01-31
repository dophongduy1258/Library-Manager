var Employee = require('../models/employee.model');


module.exports.requireLogin = async (req,res,next)=>{
	// var id = await Employee.findOne({_id: req.cookies.userID});
	if(!req.cookies.userID){
		res.redirect('/login');
		return;
	}
	// if(req.cookies.userID !== id._id){
	// 	res.redirect('/login');
	// 	return;
	// }
	next();
}