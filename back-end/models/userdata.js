const { sequelize } = require('../db');
const { Model, DataTypes } = require('sequelize');

class UserData extends Model {}

UserData.init(
	// Column config
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'userid',
		},
		pwd: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'password',
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'email',
		},
		phone: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'phone',
		},
		createdAt: {
			type: DataTypes.DATE,
			field: 'created_at',
		},
		updatedAt: {
			type: DataTypes.DATE,
			field: 'updated_at',
		},
	},
	// Model config
	{
		sequelize,
		modelName: 'UserData',
		tableName: 'user_data',
	}
);

module.exports = UserData;
