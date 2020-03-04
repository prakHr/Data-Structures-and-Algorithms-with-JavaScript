var numbers=[3,2,5,3];
var sum=0;
for(var i=0;i<numbers.length;++i){
	sum+=numbers[i];
}
console.log(sum);

var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = i+1;
}

var numbers = new Array(1,2,3,4,5);
console.log(numbers.length); // displays 5

var numbers = [1,2,3,4,5];
console.log(numbers.length); // displays 5

var numbers = new Array();//numbers=[];
console.log(numbers.length); // displays 0

var numbers = new Array(10);var nums = [];
for (var i = 0; i < 100; ++i) {
nums[i] = i+1;
}
console.log(numbers.length); // displays 10

var objects = [1, "Joe", true, null];//all elements need not be of same type

console.log(Array.isArray(numbers)); // displays false
console.logt(Array.isArray(objects)); // displays true

var position=objects.indexOf("Joe");//finds the position of an element if exists in an array

var position=objects.lastIndexOf("Joe");//finds the position of an element if exists in an array


var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
console.log(samenums[0]); // displays 400

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cis.concat(dmp);
console.log(itDiv);

var nums = [2,3,4,5];
console.log(nums); // 2,3,4,5
var newnum = 1;
nums.unshift(newnum);
console.log(nums); // 1,2,3,4,5
nums = [3,4,5];
nums.unshift(newnum,1,2);
console.log(nums); // 1,2,3,4,5

var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
console.log(nums);// 1,2,3,4,5,6,7,8,9

var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
print(nums);

var nums = [1,2,3,4,5];
nums.reverse();
print(nums); // 5,4,3,2,1

var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
nums.sort();
print(nums); // Bryan,Clayton,Cynthia,David,Mike,Raymond

function compare(num1, num2) {
	return num1 - num2;
}
var nums = [3,1,2,100,4,200];
nums.sort(compare);
console.log(nums); // 1,2,3,4,100,200

function isEven(num) {
	return num % 2 == 0;
}
function isOdd(num) {	
	return num % 2 != 0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven);
var evens = nums.filter(isEven);
var odds = nums.filter(isOdd);
var someEven = nums.some(isEven);

if (even) {
	console.log("all numbers are even");
}
else {
	console.log("not all numbers are even");
}

function add(runningTotal, currentValue) {
	return runningTotal + currentValue;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum); // displays 55

function concat(accumulatedString, item) {
	return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduce(concat);
console.log(sentence); // displays "the quick brown fox"
var sentence = words.reduceRight(concat);
console.log(sentence); // displays "fox brown quick the"

function curve(grade) {
	return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades); // 82, 70, 86, 97, 88

function first(word) {
	return word[0];
}
var words = ["for","your","information"];
var acronym = words.map(first);
console.log(acronym.join("")); // displays "fyi"

function afterc(str) {
	if (str.indexOf("cie") > -1) {
		return true;
	}
	return false;
}
var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);
console.log(misspelled); // displays recieve,percieve,concieve

function passing(num) {
	return num >= 60;
}
var grades = [];
for (var i = 0; i < 20; ++i) {
	grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
console.log("All grades: ");
console.log(grades);
console.log("Passing grades: ");
console.log(passGrades);

var twod = [];
var rows = 5;
for (var i = 0; i < rows; ++i) {
	twod[i] = [];
}


Array.matrix = function(numrows, numcols, initial) {
	var arr = [];
	for (var i = 0; i < numrows; ++i) {
		var columns = [];
		for (var j = 0; j < numcols; ++j) {
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}



var nums = Array.matrix(5,5,0);
console.log(nums[1][1]); // displays 0
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
console.log(names[1][2]); // display "Joe"

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
console.log(grades[2][2]); // displays 89


var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
	for (var col = 0; col < grades[row].length; ++col) {
		total += grades[row][col];
	}
	average = total / grades[row].length;
	console.log("Student " + parseInt(row+1) + " average: " +
	average.toFixed(2));
	total = 0;
	average = 0.0;
}

function Point(x,y) {
this.x = x;
this.y = y;
}
function displayPts(arr) {
	for (var i = 0; i < arr.length; ++i) {

		console.log(arr[i].x + ", " + arr[i].y);
	}
}
var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
for (var i = 0; i < points.length; ++i) {
	console.log("Point " + parseInt(i+1) + ": " + points[i].x + ", " +
points[i].y);
}
var p5 = new Point(12,-3);
points.push(p5);
console.log("After push: ");
displayPts(points);
points.shift();
console.log("After shift: ");
displayPts(points);

function weekTemps() {
	this.dataStore = [];
	this.add = add;
	this.average = average;
}
function add(temp) {
	this.dataStore.push(temp);
}
function average() {
	var total = 0;
	for (var i = 0; i < this.dataStore.length; ++i) {
		total += this.dataStore[i];
	}
	return total / this.dataStore.length;
}
var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average()); // displays 54.875





