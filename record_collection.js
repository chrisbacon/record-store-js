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
	}


}

module.exports = RecordCollection;