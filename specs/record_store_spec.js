var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');

describe('RecordStore', function() {

    var recordStore;
    var testRecord;

    beforeEach(function() {
        recordStore = new RecordStore('Selectadisc', 'Nottingham');
        testRecord = new Record('Parliament', 'Mothership Connection', 0.99);
        });

    it('should have a name', function() {
        assert.equal(recordStore.name, 'Selectadisc');
    });

    it('should have a city', function() {
        assert.equal(recordStore.city, 'Nottingham');
    });

    it('should have no records on instantiation', function() {
        assert.equal(recordStore.size(), 0);
    });

    it('should be possible to add records', function() {
        recordStore.add(testRecord);

        assert.equal(recordStore.size(), 1);
    });

    it('should be able to return a list of inventory', function() {
        recordStore.add(testRecord);

        assert.equal('Inventory: Mothership Connection', recordStore.getInventory());
    });

    it('should be able to sell a record', function() {
        recordStore.add(testRecord);

        var soldRecord = recordStore.sell('Mothership Connection');
        assert.equal(soldRecord, testRecord);
        assert.equal(recordStore.size(), 0);
        assert.equal(recordStore.balance, 0.99);
    });

    it('should be able to report assets + cash balance', function() {
        recordStore.add(testRecord);
        assert.equal('The store has £0 in cash and records valued at £0.99', recordStore.report());
    });
})
