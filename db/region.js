var db = require('./_db');

var Region = db.define('region',{
	zipcode:{
		type: db.Sequelize.STRING,
		allowNull: false,
	}
});

module.exports = Region;
