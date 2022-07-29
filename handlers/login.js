const { logger, types }= require("../utils/logger")
module.exports = client => {
	client.login("");
	logger(`Bot logged in!`, types.SUCCESS)
};