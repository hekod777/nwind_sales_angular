const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

var Salespeople = db.define('salesperson',{
	name:{
		type: Sequelize.STRING,
		allowNull:false,
	}
})

var Region = db.define('region',{
	zipcode:{
		type: Sequelize.STRING,
		allowNull: false,
	}
})

module.exports = {
	models:{
		Salespeople: Salespeople,
		Region: Region,
		db: db,
	},
	sync: function(){
		return db.sync({force:false});
	}

};
