var express = require('express');
var app = express();
// mongojs
var mongojs =require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
// body-parser
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public")); // load html from public folder
app.use(bodyParser.json());


app.get('/contactlist', function (req,res){
	console.log("I received a GET request");

	db.contactlist.find(function (err, docs){
		console.log(docs);
		res.json(docs);
	});
});


app.post('/contactlist', function (req, res){
	
	db.contactlist.insert(req.body, function (err, docs){
		res.json(docs);

	});
});

app.delete('/contactlist/:id', function (req, res){
		var id = req.params.id; // value of variable from url
		console.log(id);
		db.contactlist.remove({_id: mongojs.ObjectId(id)
		}, function (err, docs){
			res.json(docs);
		});
});

app.get('/contactlist/:id', function (req, res){
		var id = req.params.id; // value of variable from url
		console.log(id);
		db.contactlist.findOne({_id: mongojs.ObjectId(id)
		}, function (err, docs){
			res.json(doc);
		});
});

app.put('/contactlist/:id', function (req, res){
		var id = req.params.id; // value of variable from url
		console.log(id);
		db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
			update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
			new:true}, function (err, docs){
				res.json(docs);
			});
	});




app.listen(3000);
console.log("server is running on port 3000");