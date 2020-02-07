var Book = require('../models/book.model');

module.exports.requireUpdated = async (req,res,next)=>{
	var id = req.params.id;
	var inforBook = await Book.findById({_id:id});

}
