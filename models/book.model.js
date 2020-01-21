var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
	nameBook: String,
	author: String,
	product: String,
	translator: String,
	langue: String,
	category: String,
	page: Number,
	year: Number,
	bookCase: String,
	floor: String,
	price: Number
});

var Book = mongoose.model('Book',bookSchema,'books');
module.exports= Book; 