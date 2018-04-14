var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */
app.get("/users",function(req,res){
	res.render('hello Users')
})
app.get('/users',function (req,res) {
	User.find(function(err,data){
		if(err){
			res.send(err)
		}
		res.send(data)
	})
})

module.exports = { 
  app: app,
  User: User
};
