const express = require('express');
const router = new express.Router();
const db = require('../db');
var Salespeople = db.models.Salespeople;
module.exports = router;

router.get('/', function(req, res, next){
	Salespeople.findAll()
		.then(function(salesPeople){
			res.send(salesPeople);
		})
		.catch(next);
});

router.post('/', function(req, res, next){
	Salespeople.create({
		name: req.body.theName
	})
	.then(function(salesPerson){
		res.send(salesPerson);
	})
	.catch(next);
});

router.delete('/:id', function(req, res, next){
	console.log (req.params.id);
	Salespeople.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(function(){
			res.sendStatus(200);
		})
		.catch(next);
});
