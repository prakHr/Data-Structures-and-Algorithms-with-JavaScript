function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; // initializes an empty array to store list elements
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.length = length;
	this.contains = contains;
}

function append(element) {
	this.dataStore[this.listSize++] = element;
}

function find(element) {
	for (var i = 0; i < this.dataStore.length; ++i) {
	if (this.dataStore[i] == element) {
		return i;
		}
	}
	return -1;
}

function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}
function toString() {
	return this.dataStore;
}
function length() {
	return this.listSize;
}

function toString() {
	return this.dataStore;
}
function insert(element, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}
function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}
function contains(element) {
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
		return true;
		}
	}
	return false;
}
function front() {
	this.pos = 0;
}
function end() {
	this.pos = this.listSize-1;
}
function prev() {
	if (this.pos > 0) {
		--this.pos;
	}
}
function next() {
	if (this.pos < this.listSize) {
		++this.pos;
	}
	

	
}
function currPos() {
	return this.pos;
}
function moveTo(position) {
	this.pos = position;
}
function getElement() {
	return this.dataStore[this.pos];
}
var names = new List();
// names.append("Clayton");
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan");
// names.append("Danny");
// names.front();
// console.log(names.getElement()); // displays Clayton
// names.next();
// console.log(names.getElement()); // displays Raymond
// names.next();
// names.next();
// names.prev();
// console.log(names.getElement()); // displays Cynthia
function createArr(file) {
	var arr = file.split("\n");
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = arr[i].trim();
	}
	return arr;
};
function oldversion_displayList(list) {
	for (list.front(); list.currPos() < list.length(); list.next()) {
		console.log(list.getElement());
	}
};
function displayList(list) {

	for (list.front(); list.currPos()<list.length(); list.next()) {
		if (list.getElement() instanceof Customer) {
			console.log(list.getElement()["name"] + ", " +
			list.getElement()["movie"]);
		}
		else {
			
			console.log(list.getElement());
		}
	}
};
function Customer(name, movie) {
	this.name = name;
	this.movie = movie;
};
function checkOut(name, movie, filmList, customerList) {
	if (filmList.contains(movie)) {
		var c = new Customer(name, movie);
		customerList.append(c);
		filmList.remove(movie);
	}
	else {
		console.log(movie + " is not available.");
	}
	
};

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs'), filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;
	console.log('OK: ' + filename);
  	//console.log(data);
	//var movies=data.split("\n");
	//console.log(createArr(data));
	var movies=createArr(data);
	console.log(movies);
	console.log(movies.length);
	var movieList = new List();
	var customers = new List();
	for (var i = 0; i < movies.length; i++) {
	 	movieList.append(movies[i]);
	}
 	console.log("\nAvailable movies: \n");
	displayList(movieList);
	checkOut("Jane Doe", "The Godfather", movieList, customers);
	console.log("\nCustomer Rentals: \n");
	displayList(customers);
	checkOut("Jane Doe", "The Godfather: Part II", movieList, customers);
	console.log("\nCustomer Rentals: \n");
	displayList(customers);
	console.log("\nAvailable movies: \n");
	displayList(movieList);
	
	
	



})

