var RecordCollector = function(name, balance) {
    this.name = name;
    this.balance = balance;
    this.records = [];
}

RecordCollector.prototype = {

    size: function() {
        return this.records.length;
    },

    buy: function(recordStore, recordTitle) {
        var record = recordStore.sell(recordTitle);
        this.balance -= record.price;
        this.records.push(record);
    },

    sell: function(recordTitle) {
        var foundRecord = this.records.find(function(record) {
            return record.title === recordTitle;
        });

        var index = this.records.indexOf(foundRecord);

        this.records.splice(index, 1);
        this.balance += foundRecord.price;
        
        return foundRecord;
    }
}

module.exports = RecordCollector;