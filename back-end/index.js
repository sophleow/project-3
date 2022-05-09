const app = require('./routes');

const PORT = 3010;

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT} ...`);
});
