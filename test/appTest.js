var chai = require("chai"),
    expect = chai.expect,
    sinon = require("sinon"),
    sinonChai = require("sinon-chai"),
    mockery = require('mockery'),
    app;

chai.use(sinonChai);

var mockIOClient = function (uri, port, reciever) {
    return {
        mockResponce: function (data) {
            reciever(data);
        },
        send: sinon.spy()
    };
};

describe('app server usage', function() {

    before(function() {
        mockery.registerMock('../app/socketeer/socketClient', mockIOClient);

        app = require('../app/app');
    });

    it.skip(
        '',
        function() {
        }
    );

});