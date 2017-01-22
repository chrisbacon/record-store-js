var RecordCollection = function() {
	this.contents = {};
}

RecordCollection.prototype = {
	size: function() {
		total = 0;
		for (var artist in this.contents){
			for (var title in this.contents[artist]) {
				total += this.contents[artist][title].length;
			}
		}
		return total;
	},

	add: function(record) {
		if (this.contents[record.artist]) {

			if (this.contents[record.artist][record.title]) {
				this.contents[record.artist][record.title].push(record);
			} else {
				this.contents[record.artist][record.title] = [record];
			}

		} else {
			this.contents[record.artist] = {};
			this.add(record);
		}
	},

	get: function(artist, title) {
		return this.contents[artist][title].pop();
	},

	getValue: function() {
		total = 0;
		for (var artist in this.contents){
			for (var title in this.contents[artist]) {
				for (record of this.contents[artist][title]) {
					total += record.price;
				}
			}
		}
		return total;
	},

	getCounts: function() {
		counts = {};
		for (var artist in this.contents){

			counts[artist] = {};
			
			for (var title in this.contents[artist]) {
				counts[artist][title] = this.contents[artist][title].length;
			}
		}
		return counts;
	}
}

module.exports = RecordCollection;