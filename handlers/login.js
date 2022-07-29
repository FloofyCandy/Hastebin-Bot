const { logger, types }= require("../utils/logger")
module.exports = client => {
	client.login("Put Your Token Here");
	logger(`Bot logged in!`, types.SUCCESS)
};