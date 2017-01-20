var RecordStore = require('../record_store');
var RecordCollecter = require('../record_collecter');
var Record = require('../record');
var assert = require('assert');

describe('RecordStore', function() {

    var recordStore;
    var testRecord;
    var recordCollecter;

    beforeEach(function() {
        recordStore = new RecordStore('Selectadisc', 'Nottingham');
        testRecord = new Record('Parliament', 'Mothership Connection', 0.99);
        recordStore.add(testRecord);
        recordCollecter = new RecordCollecter('Chris', 0.99);
    });

    it('should have a name', function() {
        assert.equal(recordCollecter.name, 'Chris');
    });

    it('should have a balance', function() {
        assert.equal(recordCollecter.balance, 0.99);
    })

    it('should start of with no records on instantiation', function() {
        assert.equal(recordCollecter.size(), 0);
    });

    it('should be able to buy records', function() {
        recordCollecter.buy(RecordStore, 'Mothership Connection');

        assert.equal(recordStore.size(), 0);
        assert.equal(recordStore.balance, 0.99);
        assert.equal(recordCollecter.size(), 1);
        assert.equal(recordCollecter.balance, 0);
    });

    it('should be able to sell records', function() {
        recordCollecter.buy(RecordStore, 'Mothership Connection');

        recordCollecter.sell('Mothership Connection');

        assert.equal(recordStore.size(), 1);
        assert.equal(recordStore.balance, 0);
        assert.equal(recordCollecter.size(), 0);
        assert.equal(recordCollecter.balance, 0.99);
    });
});