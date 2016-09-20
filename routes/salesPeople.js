const express = require('express');
const router = new express.Router();
const models = require('../db');
var Salespeople = models.models.Salespeople;
module.exports = router;

router.get('/', function(req, res, next){
	console.log ('aa');
	console.log (Salespeople);
	Salespeople.findAll()
		.then(function(theSalesPeople){
			console.log (theSalesPeople)
			res.send(theSalesPeople);
		})
		.catch(next);
});

router.post('/', function(req, res, next){

	//console.log(req.body.name);
	//console.log (Object.keys(models.models));
	console.log(req.body);
	Salespeople.create({
		name: req.body.theName
	})
	.then(function(salesperson){
		res.send(salesperson);
	})
	.catch(next);

})

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
})