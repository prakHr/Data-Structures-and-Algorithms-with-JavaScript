function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.dequeue_v2 = dequeue_v2;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.toString_v2 = toString_v2;
	this.empty = empty;
	this.count = count;
	function count() {
	return this.dataStore.length;
	}
}
//adds an element to the end of a queue
function enqueue(element) {
	this.dataStore.push(element);
}

//removes an element from the front of a queue
function dequeue() {
	return this.dataStore.shift();
}
//examine the front and back elements of a queue
function front() {
	return this.dataStore[0];
}
function back() {
	return this.dataStore[this.dataStore.length-1];
}
//display all the elements in a queue:
function toString() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}
//know if a queue is empty:
function empty() {
	if (this.dataStore.length == 0) {
		return true;
	}
	else {
		return false;
	}
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

/*
Once scenario we can simulate with a queue is a square dance for singles.
When men and women arrive at this square dance, they enter the dance hall and stand
in the line for their gender. As room becomes available on the dance floor, dance partners
are chosen by taking the first man and woman in line. The next man and woman move
to the front of their respective lines. As dance partners move onto the dance floor, their
names are announced. If a couple leaves the floor and there is not both a man and a
woman at the front of each line, this fact is announced.
*/

function Dancer(name, sex) {
	this.name = name;
	this.sex = sex;
}


/*
The names are read from the text file into an array. The function then trims the newline
character from each line. The second loop splits each line into a two-element array, by
sex and by name. Then the function examines the sex element and assigns the dancer
to the appropriate queue.
*/
// Read the file and print its contents.
var fs = require('fs'), filename = "C:\\Users\\HP\\Desktop\\DSA-JS\\dancers.txt";
fs.readFile(filename, 'utf8', function(err, data) {
if (err) throw err;
console.log('OK: ' + filename);
	var maleDancers = new Queue();
	var femaleDancers = new Queue();
	getDancers(maleDancers, femaleDancers,data);
	dance(maleDancers, femaleDancers);
	if (!femaleDancers.empty()) {
		console.log(femaleDancers.front().name + " is waiting to dance.");
	}
	if (!maleDancers.empty()) {
		console.log(maleDancers.front().name + " is waiting to dance.");
	}
	if (maleDancers.count() > 0) {
	console.log("There are " + maleDancers.count() +
	" male dancers waiting to dance.");
	}
	if (femaleDancers.count() > 0) {
	console.log("There are " + femaleDancers.count() +
	" female dancers waiting to dance.");
	}
});

function getDancers(males, females,data) {
	var names = data.split("\n");
	for (var i = 0; i < names.length; ++i) {
		names[i] = names[i].trim();
	}
	for (var i = 0; i < names.length; ++i) {
		var dancer = names[i].split(" ");
		var sex = dancer[0];
		var name = dancer[1];
		if (sex == "F") {
			females.enqueue(new Dancer(name, sex));
		}
		else {
			males.enqueue(new Dancer(name, sex));
		}
	}
}

/*
The next function pairs up the male and female dancers and announces the pairings
*/
function dance(males, females) {
	console.log("The dance partners are: \n");
	while (!females.empty() && !males.empty()) {
		person = females.dequeue();
		console.log("Female dancer is: " + person.name);
		person = males.dequeue();
		console.log(" and the male dancer is: " + person.name);
	}
	console.log();
}	
/*
The radix sort works by making two passes over a data set, in this case the set of integers
from 0 to 99. The first pass sorts the numbers based on the 1s digit, and the second pass
sorts the numbers based on the 10s digit. Each number is placed in a bin based on the
digit in each of these two places.
We need nine
queues, one for each digit. We will store the queues in an array. We uses the modulus
and integer division operations for determining the 1s and 10s digits. The remainder
of the algorithm entails adding numbers to their appropriate queues, taking the numbers
out of the queues to re-sort them based on the 1s digit, and the repeating the process
for the 10s digit.
*/
function distribute(nums, queues, n, digit) { // digit represents either the 1s
// or 10s place
	for (var i = 0; i < n; ++i) {
		if (digit == 1) {
			queues[nums[i]%10].enqueue(nums[i]);
		}
		else {
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
		}
	}
}

function collect(queues, nums) {
	var i = 0;
	for (var digit = 0; digit < 10; ++digit) {
		while (!queues[digit].empty()) {
			nums[i++] = queues[digit].dequeue();
		}
	}
}

function dispArray(arr) {
	var retStr="";
	for (var i = 0; i < arr.length; ++i) {
		retStr+=(arr[i] + " ");
	}
	console.log(retStr);
}

var queues = [];
for (var i = 0; i < 10; ++i) {
	queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
	nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);

function Patient(name, code) {
	this.name = name;
	this.code = code;
}
/*
Now we need to redefine the dequeue() function that removes the element in the queue
with the highest priority. We will define the highest priority element as being the element
with the lowest priority code. This new dequeue() function will move through the
queue’s underlying array and find the element with the lowest code. Then the function
uses the splice() function to remove the highest-priority element.
*/
function dequeue_v2() {
	var priority = this.dataStore[0].code;
	for (var i = 1; i < this.dataStore.length; ++i) {
		if (this.dataStore[i].code < priority) {
			priority = i;
		}
	}
	return this.dataStore.splice(priority,1);
}
function toString_v2() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i].name + " code: "
		+ this.dataStore[i].code + "\n";
	}
	return retStr;
}

var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString_v2());
var seen = ed.dequeue_v2();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString_v2());
// another round
var seen = ed.dequeue_v2();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString_v2());
var seen = ed.dequeue_v2();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString_v2());
