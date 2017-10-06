var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

var Report = require('./report/models/report');

mongoose.connect('mongodb://127.0.0.1:27017/reports');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/report'));

//reports
app.get('/api/reports', function(req, res){
	Report.find(function(err, reports){
		if(err)
			res.send(err);
		res.json(reports);
	});
});

app.get('/api/reports/:id', function(req, res){
	Report.findOne({_id:req.params.id}, function(err, report){
		if(err)
			res.send(err);
		res.json(report);
	});
});
app.post('/api/reports', function(req, res){
	Report.create( req.body, function(err, reports){
		if(err)
			res.send(err);
		res.json(reports);
	});
});

app.delete('/api/reports/:id', function(req, res){
	Report.findOneAndRemove({_id:req.params.id}, function(err, report){
		if(err)
			res.send(err);
		res.json(report);
	});
});
app.put('/api/reports/:id', function(req, res){
	var query = {
		name:req.body.name,
		type:req.body.type,
		latitude:req.body.latitude,
		longitude:req.body.longitude,
		author:req.body.author,
		date:req.body.date
	};
	Report.findOneAndUpdate({_id:req.params.id}, query, function(err, report){
		if(err)
			res.send(err);
		res.json(report);
	});
});

//users


app.listen(3000, function(){
	console.log('server is running on port 3000..');
});