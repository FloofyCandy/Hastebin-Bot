const fs = require('fs');
const { logger, types }= require("../utils/logger")
module.exports = client => {
	fs.readdir('./events/', (err, files) => {
		if (err) return console.log(err);
		let amount = 0;
		files.forEach(file => {
			if (!file.endsWith('.js')) return;
			const event = require(`../events/${file}`);
			const eventName = file.split('.')[0];
			client.on(eventName, event.bind(null, client));
			delete require.cache[require.resolve(`../events/${file}`)];
			amount = amount + 1;
		});
		logger(`${amount} event listeners were loaded!`, types.SUCCESS)
	});
};