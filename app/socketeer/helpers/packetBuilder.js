/**
 *	NAME: packetBuilder.js
 *	DESC: Builds socket packets out of a message list.
 *	AUTHOR: Jonathan HW Halkett a.k.a Jops
 *	DATE: 28/10/16
 */

var Builder = function() {};

Builder.prototype =
{
	messages: [],

	withMessage: function( msg )
	{
		this.messages.push(msg);
		return this;
	},

	withMessages: function( msgList )
	{
		this.messages = msgList;
		return this;
	},

	clear: function()
	{
		this.messages = [];
	},

	build: function()
	{
		var packet = this.messages;

		this.clear();
		return packet;
	}
};

module.exports = function() {
	return new Builder();
};