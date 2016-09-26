const express = require('express');
const router = new express.Router();
const models = require('../db');
var Region = models.models.Region;
module.exports = router;

router.get('/', function(req, res, next){
	Region.findAll()
		.then(function(regions){
			res.send(regions);
		})
		.catch(next);
});

router.post('/', function(req, res, next){
	Region.create({
		zipcode: req.body.theZipcode
	})
	.then(function(region){
		res.send(region);
	})
	.catch(next);
})

router.delete('/:id', function(req, res, next){
	Region.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(function(){
			res.sendStatus(200);
		})
		.catch(next);
})
