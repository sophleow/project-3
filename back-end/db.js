const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('project-3', 'postgres', 'Chew1989', {
	host: 'localhost',
	dialect: 'postgres',
});

/*const sequelize = new Sequelize('<database name>', '<username>', '<password>' */

const testConnection = async () => {
	try {
		await sequelize.authenticate();
		return true;
	} catch (err) {
		console.log(`Couldn't connect to the database`, err); //or use "" or ``
		return false;
	}
};

module.exports = {
	testConnection,
	sequelize,
};
