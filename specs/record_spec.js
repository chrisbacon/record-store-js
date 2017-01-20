var Record = require('../record');
var assert = require('assert');

describe('Record', function() {

    var record = new Record('Parliament', 'Mothership Connection', 0.99);

    it('it should have an artist', function() {
        assert.equal(record.artist, 'Parliament');
    });

    it('it should have an title', function() {
        assert.equal(record.title, 'Mothership Connection');
    });

    it('it should have an price', function() {
        assert.equal(record.price, 0.99);
    });
    
})