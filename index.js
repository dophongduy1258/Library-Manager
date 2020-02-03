require('dotenv').config();
var cookieParser = require('cookie-parser'); 
var express = require('express');
var app = express();
var host = process.env.HOST;
var port = process.env.PORT;
var loginRouter = require('./routers/login.route');
var employeeRouter = require('./routers/employee.route');
var loginMiddleware = require('./middlewares/login.middleware');
var bookRouter = require('./routers/book.route');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','pug');
app.set('views','./views');

app.use(cookieParser());
app.use(express.static('public'));

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});





app.get('/',(req,res)=>{
	res.render('index');
});
app.use('/login',loginRouter);
app.use('/employee',loginMiddleware.requireLogin,employeeRouter);
app.use('/book',bookRouter);
// ,loginMiddleware.requireLogin



app.listen(port,host,()=>{
	console.log(`Connect server //${host} : ${port} successful !!!`);
}).on('error',(error)=>{
	console.log(`Server is disconnected : ${error}`);
});
