/**
 *	NAME: socketClient.js
 *	DESC: Socket.io network adapter.
 *	AUTHOR: Jonathan HW Halkett a.k.a Jops
 *	DATE: 28/10/16
 */

var socket = require('socket.io-client'),
	config = require('config'),
	identity = config.identity,
	packager = require('./helpers/packetBuilder')(),
	message = require('./ioMessage'),
	messages = [],
	trace = function (msg) { console.log(msg); },
	timeout = config.sendTimeout,
	interval,
	recieverEvent;

/*
1/16 Client -> Server
1/46 Server -> Client
*/

function setListeners()
{
	socket.on(
		'connect',
		function()
		{
			trace('Connected to server.');

			socket.emit( 'identify', { pw: identity } );

			socket.on(
				'disconnect',
				function()
				{
					trace('Disconnected from server.');
				}
			);
			socket.on(
				'recieve',
				recieverEvent
			);
		}
	);
}

function sendMessage( eventName, data )
{
	messages.push( message( eventName, data ) );
}

function setPosterInterval()
{
	interval = setInterval( DO, interval );
}

function DO()
{
	if( !messages.length ) return;
	socket.emit(
		'command',
		packager.withMessages( messages )
		.build()
	);
	messages = [];
}

module.exports = function( uri, port, reciever )
{
	socket = socket( uri + ':' + port );
	recieverEvent = reciever;

	setListeners();

	setPosterInterval();

	return { send: sendMessage };
};
