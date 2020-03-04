function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.betterHash = betterHash;
	this.put = put;
	this.putModifiedv1 = putModifiedv1;
	this.putModifiedv2 = putModifiedv2;
	this.putModifiedv3 = putModifiedv3;
	this.buildChains = buildChains;
	this.showDistroModified = showDistroModified;
	this.get = get;
	this.getModified = getModified;
	this.getPos = getPos;
}

//puts data into position of table that is determined by hash
function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}
//takes the sum of ASCII values
function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
	}
	//console.log("Hash value: " + data + " -> " + total);
	return total % this.table.length;
}

//adds a step in simpleHash by multiplying by prime constant H
function betterHash(string) {
	const H = 37;
	var total = 0;
	for (var i = 0; i < string.length; ++i) {
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length-1;
	}
	return parseInt(total);
}

//prints the key,value pairs in table array
function showDistro() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i] != undefined) {
			console.log(i + ": " + this.table[i]);
		}
	}
}

console.log("Here");
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]);
}
hTable.showDistro();
console.log("Here");
//generates random integer between min and max
function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generates student data
/*
The inner loop generates the student
ID number, and right after the inner loop finishes, a random grade is generated
and concatenated to the student ID.
 */
function genStuData(arr) {
	for (var i = 0; i < arr.length; ++i) {
		var num = "";
		for (var j = 1; j <= 9; ++j) {
			num += Math.floor(Math.random() * 10);
		}
		num += getRandomInt(50, 100);
		arr[i] = num;
	}
}

var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
// console.log("Student data: \n");
// for (var i = 0; i < students.length; ++i) {
// 	console.log(students[i].substring(0,8) + " " +
// 	students[i].substring(9));
// }
// console.log("\n\nData distribution: \n");
// var hTable = new HashTable();
// for (var i = 0; i < students.length; ++i) {
// 	hTable.put(students[i]);
// }
//hTable.showDistro();

// modified version of put
function putModifiedv1(data) {
	var pos = this.betterHash(data);
	this.table[pos] = data;
}
// modified version of put
function putModifiedv2(key, data) {
	var pos = this.betterHash(key);
	this.table[pos] = data;
}

// hashes the key so that it can determine where the data is stored
function get(key) {
	return this.table[this.betterHash(key)];
}

function getPos(key) {
	return this.betterHash(key);
}
// var prompt = require('prompt');
// var prompt_attributes = [
//     {
//         // The fist input text is assigned to username variable.
//         name: 'name',
//         // The username must match below regular expression.
//         validator: /^[a-zA-Z]+$/,
//         // If username is not valid then prompt below message.
//         warning: 'name is not valid it contains only alphabets'
//     },
//     {
//         // The fist input text is assigned to username variable.
//         name: 'number',
//         // The username must match below regular expression.
//         validator: /^[0-9]+$/,
//         // If username is not valid then prompt below message.
//         warning: 'number is not valid it contains only positive numbers between 0 and inf'
//     }
// ];
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// the only changes are in promptAge()
// an internal function executes the asking, without generating a new Promise
function promptAge() {
  return new Promise(function(resolve, reject) {
    var ask = function() {
      rl.question('Enter your number? ', function(answer) {
        age = answer;
        if (/^[0-9]+$/.test(age) ==true) {
          // internal ask() function still has access to resolve() from parent scope
          
          resolve(age, reject);
        } else {
          // calling ask again won't create a new Promise - only one is ever created and only resolves on success
          console.log("number is not valid it contains only positive numbers between 0 and inf");
          ask();
        }
      });
    };
    ask();
  });
}

function promptName() {
  return new Promise(function(resolve, reject) {
    var ask = function() {
      rl.question('Enter your name? ', function(answer) {
        name = answer;
        if (/^[a-zA-Z ]+$/.test(name)==true ) {
          // internal ask() function still has access to resolve() from parent scope

          resolve(name, reject);
        } else {
          // calling ask again won't create a new Promise - only one is ever created and only resolves on success
          console.log("name is not valid it contains only alphabets");
          ask();
        }
      });
    };
    ask();
  });
}


// (async function start() {
// 	for(var i=0;i<3;i++){
// 		var name = await promptName();
//     	var number =  await promptAge();
//    		console.log('USER NAME: ' + name);
// 		console.log('USER NUMBER: ' + number);
	
// 	}
	    
// 	//process.exit();Ctrl+C
// })();



var pnumbers = new HashTable();
var name, number;
        

// (async function start_2() {
// 	while(name!="quit"){
// 		name = await promptName();
//     	if (name == "quit") {
//     		process.exit();
// 			break;
// 		}
// 		pnumbers.put(name);
//    		console.log(name + "'s number is " + pnumbers.getPos(name));		
// 		console.log("Name for number (Enter quit to stop): ");
	
// 	}
	    
// 	//process.exit();Ctrl+C
// })();

// seperate chaining generates a twoD array
function buildChains() {
	for (var i = 0; i < this.table.length; ++i) {
		this.table[i] = new Array();
	}
}

// modified version of showDistro
function showDistroModified() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i][0] != undefined) {
			console.log(i + ": " + this.table[i]);
		}
	}
}
var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
	hTable.putModifiedv1(someNames[i]);
}
hTable.showDistroModified();


