var socket = require('socket.io-client'),
	config = require('config'),
	client = require('./socketClient');

function trace( msg ) { console.log( msg ); }

function setListeners () {
	socket.on('connect', function () { trace('connected to server.'); socket.emit('test'); } );
	socket.on('serverTest', function ( data ) { trace('testing testing testing.'); } );
	socket.on('disconnect', function () { trace('disconnected from server.'); } );
}

module.exports = function () {
	var uri = process.argv[2] || config.uri,
		port = process.argv[3] || config.port;

	socket = socket( uri + ':' + port );

	setListeners();
};