const { resolve } = require('path');
require('dotenv-safe').config({
	path: resolve(__dirname, '../../.env'),
	example: resolve(__dirname, '../../.env.example'),
});

const app = require('./app');

const port = process.env.PORT || 3000;

const initializeApp = async () => {
	try {
		console.log('Initializing the app');


		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	} catch (err) {
		console.error('Error initializing the app', err);
	}
};

process.on('unhandledRejection', (err) => {
	console.error('Unhandled rejection', err);
	process.exit(1);
});

initializeApp();