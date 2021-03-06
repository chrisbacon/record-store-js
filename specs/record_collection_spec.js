var RecordCollection = require('../record_collection');
var Record = require('../record');
var assert = require('assert');

describe('record collection', function() {

	var recordCollection;
	var testRecord;

	beforeEach(function() {
		recordCollection = new RecordCollection();
		testRecord = new Record('Parliament', 'Mothership Connection', 0.99);
	});

	it('should start off empty', function() {
		assert.equal(recordCollection.size(), 0);
	});

	it('should be able to add records, increasing the size by 1', function() {

		recordCollection.add(testRecord);

		assert.equal(recordCollection.size(), 1);
	});

	it('should be possible to return a record by title and artist', function() {

		recordCollection.add(testRecord);

		assert.equal(testRecord, recordCollection.get('Parliament', 'Mothership Connection'));
	});

	it('getting a record should remove the record from the collection', function() {

		recordCollection.add(testRecord);
		recordCollection.get('Parliament', 'Mothership Connection');

		assert.equal(recordCollection.size(), 0);
	});

	it('should be able to return an object that contains the counts of each record', function() {
		recordCollection.add(testRecord);
		recordCollection.add(testRecord);

		expected = {
			'Parliament': {
				'Mothership Connection': 2
			}
		}

		assert.deepEqual(expected, recordCollection.getCounts());
	});

	it('should be able to return the total value of all the records contained', function() {
		recordCollection.add(testRecord);
		recordCollection.add(testRecord);

		assert.equal(1.98, recordCollection.getValue());
	})
})