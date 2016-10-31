/**
 *	NAME: ioMessage.js
 *	DESC: socket packet message struct.
 *	AUTHOR: Jonathan HW Halkett a.k.a Jops
 *	DATE: 28/10/16
 */

module.exports = function( eventName, data )
{
	var msg = {
		e: eventName
	};

	if( data ) msg.d = data;

	return msg;
};