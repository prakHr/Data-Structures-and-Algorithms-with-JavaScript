function Set() {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
	this.contains = contains;
}

// adds data to dataStore if not present and sorts the array
function add(data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		this.dataStore.sort();
		return true;
	}
	else {
		return false;
	}
}

// removes data from array if present
function remove(data) {
	var pos = this.dataStore.indexOf(data);
	if (pos > -1) {
		this.dataStore.splice(pos,1);
		return true;
	}
	else {
		return false;
	}
}

// gets array
function show() {
	return this.dataStore;
}

// check if data present in array or not
function contains(data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true;
	}
	else {
		return false;
	}
}

// gets union of elements between arrays named set and this.dataStore
// returns that as tempSet
function union(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		tempSet.add(this.dataStore[i]);
	}
	for (var i = 0; i < set.dataStore.length; ++i) {
		if (!tempSet.contains(set.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}


// gets intersection of elements between arrays named set and this.dataStore
// returns that as tempSet
function intersect(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

// checks if an array is a subset of dataStore or not
function subset(set) {
	if (this.size() > set.size()) {
		return false;
	}
	else {
		
		this.dataStore.forEach((member)=>
		{
			if (!set.contains(member)) {
				return false;
			}
		});
	}
	return true;
}

// returns size of an array
function size() {
	return this.dataStore.length;
}

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
	console.log("Mike added");
}
else {
	console.log("Can't add Mike, must already be in set");
}
console.log(names.show());
var removed = "Mike";
if (names.remove(removed)) {
	console.log(removed + " removed.");
}
else {
	console.log(removed + " not removed.");
}
names.add("Clayton");
console.log(names.show());
removed = "Alisa";
if (names.remove("Mike")) {
	console.log(removed + " removed.");
}
else {
	console.log(removed + " not removed.");
}

var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
it = cis.union(dmp);
console.log(it.show());


var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
if (dmp.subset(it)) {
	console.log("DMP is a subset of IT.");
}
else {
	console.log("DMP is not a subset of IT.");
}

// gets difference between A and B A-B,where A=set,B=dataStore
function difference(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (!set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}


var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new Set();
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show()
+ "] -> [" + diff.show() + "]");
