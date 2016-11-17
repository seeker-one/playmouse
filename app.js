var express=require('express');
var querystring=require('querystring');
var app=express();
var mysql=require('mysql');
var pool=mysql.createPool({
	host:'localhost',
	port:'3306',
	database:'myblog',
	user:'root',
	password:'199698'
});
app.use(express.static('public'));
var login=require('./routes/index.js')
app.post('/login.html',login.login());
app.listen(8888,'127.0.0.1');