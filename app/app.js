var config = require('config'),
	ioClient = require('./socketeer/socketClient'),
	trace = function (msg) { console.log(msg); },
	client;

var serverMessage = function (data) {
	trace( 'from server: ' + JSON.stringify(data) );
};

module.exports = function () {
	var uri = process.argv[2] || config.uri,
		port = process.argv[3] || config.port;

	client = ioClient(uri, port, serverMessage);

	client.send('command-list');
};