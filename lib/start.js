'use strict';

require('env2')('.env');

const Server = require('./index');
const Hoek = require('hoek');

Server.init(process.env.PORT, function(err, server) {

	Hoek.assert(!err, err);
	console.log('Server is running on: ', server.info.uri);
});
