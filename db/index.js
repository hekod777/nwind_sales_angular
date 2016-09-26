var db = require('./_db');

const SalesPerson = require('./salesPerson');
const Region = require('./region');


module.exports = {
	models:{
		Salespeople: SalesPerson,
		Region: Region
	},
	sync: function(){
		return db.sync({force:true});
	}
};
