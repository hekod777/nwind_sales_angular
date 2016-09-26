var db = require('./_db');

var SalesPerson = db.define('salesperson',{
	name:{
		type: db.Sequelize.STRING,
		allowNull:false,
	}
});

module.exports = SalesPerson;
