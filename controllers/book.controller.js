var Book = require('../models/book.model');

module.exports.mainBook = async (req,res)=>{
	var books = await Book.find();
	res.render('book/main-book',{books:books
	});
	
}

module.exports.postDeleteBook = async (req,res)=>{
	var btnDel= req.body.btnDel;
	// console.log(req.body.idBtn);
	// var a = await Book.findById({_id:id});
	await Book.deleteOne({_id:btnDel});
	var books = await Book.find();
	res.render('book/main-book',{books:books});
} 

module.exports.createBook = (req,res)=>{
	var langues = {VN:'Viet Nam',RS:'Rusian',GM:'German'};
	var categorys = {KD:'Kinh di',TT:'Trinh tham',HH:'Hai huoc'};
	res.render('book/create-book',
			{
				options: {
					langues:langues,
					categorys:categorys					
				}
			}
			// {
			// 	categorys: categorys
			// },
		);
}

module.exports.postCreateBook = (req,res)=>{
	Book.create([req.body]);
	res.redirect('/book');
}

module.exports.editBook = async (req,res)=>{
	var id = req.params.id;
	var inforBook = await Book.findById({_id:id});
	// console.log(inforBook.author);
	res.render('book/edit-book',{inforBook:inforBook});
}

module.exports.postEditBook = async (req,res)=>{
	// var inforBook = await Book.findById({_id:id});
	// id = inforBook._id;
	var id = req.body.id;
	// console.log(ids);
	var name = req.body.name;
	var author = req.body.author;
	var product = req.body.product;
	var translator = req.body.translator;
	var page = req.body.page;
	var year = req.body.year;
	var bookCase = req.body.bookCase;
	var floor = req.body.floor;

	// console.log(typeof name);
	// console.log(typeof inforBook.name);

	// if(name !== inforBook.name){
	// 	var updated = await Book.findOneAndUpdate({_id:id},{$push: {'name':name}});
	// 	return updated;
	// }

	await Book.updateOne({_id: id},{
		'name':name,
		'author':author,
		'product':product,
		'translator':translator,
		'page':page,
		'year':year,
		'bookCase':bookCase,
		'floor':floor
	});

	// var q = await Book.where({_id: id});
	//   	q.update({$set :
	// 		{	'name':name,
	// 			'author':author,
	// 			'product':product,
	// 			'translator':translator,
	// 			'page':page,
	// 			'year':year,
	// 			'bookCase':bookCase,
	// 			'floor':floor,
	// 		}}
	// ).exec();

	// res.render('book/main-book',{books:q});
	res.redirect('/book');
}