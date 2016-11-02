var config = require('config'),
	ioClient = require('./socketeer/socketClient'),
	trace = function (msg) { console.log(msg); },
	serverReady = false,
	client;

/**
 *	SERVER RESPONCE TYPES
 *
 *	data = { t: type, m: message }
 *
 *	type:
 *		'init' - tells you server has completed registering you as a client.
 *		'server-info' - message to you from the server.
 *		'ship-info' - data specific to your role from the ship.
 *		'message-from-*' - crew message intended for you from a named crew member.
 */
var serverMessage = function (data) {
	trace( 'from server: ' + JSON.stringify(data) );

	if (data.t === 'init') {
		init();
	}
};

var init = function () {
	serverReady = true;

	client.send('command-info');
	client.send('command-info', ['crew-message']);
	client.send('crew-message', ['captain', 'Aye aye sir!']);
};

module.exports = function () {
	var uri = process.argv[2] || config.uri,
		port = process.argv[3] || config.port;

	client = ioClient(uri, port, serverMessage);
};