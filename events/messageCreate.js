const { createPaste } = require('hastebin');
const fetch = (...args) => import('node-fetch').then(({ default: e }) => e(...args));
const { logger, types }= require("../utils/logger")
module.exports = async (client, message) => {
	try {
		if (message.attachments.size > 0) {
			const url = message.attachments.first().url;
			const filetypes = ['.log', '.txt', '.json', '.yml', '.yaml', '.css', '.py', '.js', '.sh', '.config', '.conf'];
			if (!url.endsWith('.html')) {
				if (!message.attachments.first().contentType) return;
				const filetype = message.attachments.first().contentType.split('/')[0];
				if (filetypes.some(ext => url.endsWith(ext)) || filetype == 'text') {

					await message.channel.sendTyping();

					const res = await fetch(url);

					let text = await res.text();

					let response = await createPaste(text, { server: 'https://bin.birdflop.com' });

					message.reply(response);
					logger(`File uploaded by ${message.author.tag} (${message.author.id}): ${response}`, types.COMMAND)
				}
			}
		}
	}
	catch(err){
		logger(err.stack, types.ERROR)
	}
}