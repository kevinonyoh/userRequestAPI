const logger = require("../utils/logger")

function logs(req, res, next) { 
	logger.info('Requests Information', {
        url: req.url,
        method: req.method,
        headers: req.headers,
        body: req.body
    })
	next();
}

module.exports = logs