const { sequelize } = require("../db");
const { Model, DataTypes } = require("sequelize");
require("validator");

class User extends Model {}

User.init(
	// Column config
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			field: "email",
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		token: {
			type: DataTypes.STRING,
			field: "token",
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			field: "password",
		},
		createdAt: {
			type: DataTypes.DATE,
			field: "created_at",
		},
		updatedAt: {
			type: DataTypes.DATE,
			field: "updated_at",
		},
	},
	// Model config
	{
		sequelize,
		modelName: "User",
		tableName: "users",
	}
);

module.exports = User;
