const { testConnection } = require('./db');
const UserData = require('./models/userdata');
const TodoList = require('./models/todo-list');

async function initiate() {
	if (!(await testConnection())) {
		return;
	}

	// await UserData.sync({ alter: true });
	// await TodoList.sync({ alter: true });

	// const userdata = await UserData.findAll();
	// console.table(JSON.parse(JSON.stringify(userdata)));

	const todolist = await TodoList.findAll();
	console.table(JSON.parse(JSON.stringify(todolist)));
}

initiate();
