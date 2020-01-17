require('dotenv').config();
var express = require('express');
var app = express();
const host = process.env.HOST;
const port = process.env.PORT;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var employeeRoute = require('./routers/employee.rout');

app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

app.get('/',(req,res)=>{
	res.render('index');
	res.send('aiusfghaksubf');
});



app.listen(port,()=>{
	console.log('Connect server //${host} : ${port} successful :))');
});
