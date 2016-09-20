// const router = require('express').Router();
// module.exports = router;

// router.use('/salespeople', require('../routes/salesPeople.js'));
// //router.use('/regions', require('../routes/regions.js'));

// router.use(function(req, res, next){
// 	res.status(404).end();
// })


const express = require('express');
const router = new express.Router();
const models = require('../db/index.js');
const Salespeople = models.Salespeople;
const Region = models.Region;


router.get('/salespeople', function(req, res, next){
	Salespeople.findAll()
		.then(function(salesPeople){
			res.send(salesPeople);
		})
		.catch(next);
});

router.post('/salesperson', function(req, res, next){
	Salespeople.create({
		name: req.body.name
	})
	.then(function(salesperson){
		res.send(salesperson);
	})
	.catch(next);
})


module.exports = router;