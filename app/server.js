var socket = require('socket.io-client')('http://localhost:3000');

function trace( msg )
{
	console.log( msg );
}

socket.on('connect', function(){ trace('connected to server.'); socket.emit('test'); });
socket.on('serverTest', function( data ){ trace('testing testing testing.'); });
socket.on('disconnect', function(){ trace('disconnected from server.'); });