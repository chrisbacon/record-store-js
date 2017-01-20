var RecordStore = function(name, city) {
    this.name = name;
    this.city = city;
    this.balance = 0;
    this.records = [];
}

RecordStore.prototype = {

    size: function() {
        return this.records.length;
    },

    add: function(record) {
        return this.records.push(record);
    },

    getInventory: function() {
        return this.records.reduce(function(inventoryString, record) {
            return inventoryString + ' ' + record.title;
        }, 'Inventory:'
    )},

    sell: function(recordTitle) {

        var foundRecord = this.records.find(function(record) {
            return record.title === recordTitle;
        });

        var index = this.records.indexOf(foundRecord);

        this.records.splice(index, 1);
        this.balance += foundRecord.price;
        
        return foundRecord;
    },

    report: function() {

        var reportString = 'The store has £' + this.balance + ' in cash and records valued at £';
        
        var totalValueOfRecords = this.records.reduce(function(total, record) {
            return total + record.price;
        }, 0);

        return reportString + totalValueOfRecords;
    }
}

module.exports = RecordStore;