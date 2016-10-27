var chai = require("chai"),
    expect = chai.expect,
    sinon = require("sinon"),
    sinonChai = require("sinon-chai"),
    mockery = require('mockery'),
    mockServer = require('./mockServer'),
    app;

chai.use(sinonChai);

describe('app server usage', function() {

    before(function() {
        app = require('../app/app');
    });

    describe.skip( '', function() {
        it(
            '',
            function( done )
            {
                var key = '/thekey/file.png';
                app.requestSignedUrl( mockRequest, key ).then(
                    function( url ) {
                        expect( url ).to.contain( key );
                        done();
                    }
                );
            }
        );
    });

});