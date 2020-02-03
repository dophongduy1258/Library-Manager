var Book = require('../models/book.model');

module.exports.mainBook = async (req,res)=>{
	var books = await Book.find();
	res.render('book/main-book',{books:books
	});
}

module.exports.createBook = (req,res)=>{
	var langues = [{VN:'Viet Nam'},{RS:'Rusian'},{GM:'German'}];
	var categorys = [{KD:'Kinh di'},{TT:'Trinh tham'},{HH:'Hai huoc'}];
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
	res.render('book/edit-book',{inforBook:inforBook});
}