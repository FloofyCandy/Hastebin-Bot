const { ActivityType } = require('discord.js');
const { logger, types }= require("../utils/logger")
module.exports = async (client) => {
	client.user.setPresence({ activities: [{ name: 'for log files', type: ActivityType.Watching }] });
	logger(`${client.user.tag} is online!`, types.SUCCESS)
};