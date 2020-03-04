function CArray(numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.insert = insert;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;
	this.bubbleSort = bubbleSort;
	this.selectionSort = selectionSort;
	this.insertionSort = insertionSort;
	this.shellsort = shellsort;
	this.shellsort1 = shellsort1;
	this.mergeSort = mergeSort;
	this.mergeArrays = mergeArrays;
	this.gaps = [5,3,1];
	function setGaps(arr) {
		this.gaps = arr;
	}
	for (var i = 0; i < numElements; ++i) {
		this.dataStore[i] = i;
	}
}

// sets the array with random elements
// scale the element by multiplying by no of elements plus one
function setData() {
	for (var i = 0; i < this.numElements; ++i) {
		this.dataStore[i] = Math.floor(Math.random() *
							(this.numElements+1));
	}
}

// sets all value to 0
function clear() {
	for (var i = 0; i < this.dataStore.length; ++i) {
		this.dataStore[i] = 0;
	}
}

// insert a new element
function insert(element) {
	this.dataStore[this.pos++] = element;
}

//string representation of 10 elements at a time 
function toString() {
	var retstr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		retstr += this.dataStore[i] + " ";
		if (i > 0 && i % 10 == 0) {
			retstr += "\n";
		}
	}
	return retstr;
}

//swaps 2 indices elements
function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());

// compares two elements and swaps them
// done till iteration equals length of array
function bubbleSort() {
	var numElements = this.dataStore.length;
	var temp;
	for (var outer = numElements; outer >= 2; --outer) {
		for (var inner = 0; inner <= outer-1; ++inner) {
			if (this.dataStore[inner] > this.dataStore[inner+1]) {
				swap(this.dataStore, inner, inner+1);
			}
		}
		//console.log(this.toString());
	}
}


var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.bubbleSort();
console.log("After bubble sort");
console.log(mynums.toString());

// selects the smallest element and swaps it with front pos
// selects the second smallest and swaps it with front+1 pos
function selectionSort() {
	var min, temp;
	for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
		min = outer;
		for (var inner = outer + 1;
			inner <= this.dataStore.length-1; ++inner) {
			if (this.dataStore[inner] < this.dataStore[min]) {
				min = inner;
			}
		}
		swap(this.dataStore, outer, min);
		//console.log(this.toString());
	}
}
var numElements1 = 10;
var mynums1 = new CArray(numElements1);
mynums1.setData();
console.log(mynums1.toString());
mynums1.selectionSort();
console.log("After selection Sort");
console.log(mynums1.toString());

/*
The insertion sort has two loops. The outer loop moves element by element through
the array, while the inner loop compares the element chosen in the outer loop to the
element next to it in the array. If the element selected by the outer loop is less than the
element selected by the inner loop, array elements are shifted over to the right to make
room for the inner-loop element
*/
function insertionSort() {
	var temp, inner;
	for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
		temp = this.dataStore[outer];
		inner = outer;
		while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
			this.dataStore[inner] = this.dataStore[inner-1];
			--inner;
		}
		this.dataStore[inner] = temp;
	}
}


// Timing a for loop
var start = new Date().getTime();
for (var i = 1; i < 100; ++i) {
	//console.log(i);
}
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("The elapsed time for loop was: " + elapsed + " milliseconds.");


//For 1,000/10,000 numbers, the selection sort and the insertion sort are almost twice as fast as
//the bubble sort.
var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("Elapsed time for the bubble sort on " + numElements + " elements is: " + elapsed + " milliseconds.");

start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the selection sort on " + numElements + " elements is: " + elapsed + " milliseconds.");

start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the insertion sort on " + numElements + " elements is: " + elapsed + " milliseconds.");

// static gaps(5,3,1) is taken then insertion sort is applied
function shellsort() {
	for (var g = 0; g < this.gaps.length; ++g) {
	for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
		var temp = this.dataStore[i];
		for (var j = i; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp; j -= this.gaps[g]) {
			this.dataStore[j] = this.dataStore[j - this.gaps[g]];
		}
		this.dataStore[j] = temp;
		}
		//console.log(this.toString());
	}
}

var nums = new CArray(10);
nums.setData();
console.log("Before Shellsort: \n");
console.log(nums.toString());
console.log("\nDuring Shellsort: \n");
nums.shellsort();
console.log("\nAfter Shellsort: \n");
console.log(nums.toString());

// dynamic gaps are computed and shell sort is modified
function shellsort1() {
	var N = this.dataStore.length;
	var h = 1;
	while (h < N/3) {
		h = 3 * h + 1;
	}
	while (h >= 1) {
		for (var i = h; i < N; i++) {
			for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h];j -= h) {
				swap(this.dataStore, j, j-h);
			}
		}
		h = (h-1)/3;
	}
}

var nums = new CArray(100);
nums.setData();
console.log("Before Shellsort1: \n");
console.log(nums.toString());
nums.shellsort1();
console.log("\nAfter Shellsort1: \n");
console.log(nums.toString());

//Both algorithms sorted the data in the same amount of time.
var nums = new CArray(10000);
nums.setData();
var start = new Date().getTime();
nums.shellsort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("Shellsort with hard-coded gap sequence: " + elapsed + " ms.");

nums.clear();
nums.setData();
start = new Date().getTime();
nums.shellsort1();
stop = new Date().getTime();
console.log("Shellsort with dynamic gap sequence: " + elapsed + " ms.");

function mergeSort(arr) {
	if (arr.length < 2) {
		return;
	}
	var step = 1;
	var left, right;
	while (step < arr.length) {
		left = 0;
		right = step;
		while (right + step <= arr.length) {
			mergeArrays(arr, left, left+step, right, right+step);
			left = right + step;
			right = left + step;
		}
		if (right < arr.length) {
		mergeArrays(arr, left, left+step, right, arr.length);
		}
		step *= 2;
	}
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
	var rightArr = new Array(stopRight - startRight + 1);
	var leftArr = new Array(stopLeft - startLeft + 1);
	k = startRight;
	for (var i = 0; i < (rightArr.length-1); ++i) {
		rightArr[i] = arr[k];
		++k;
	}
	k = startLeft;
	for (var i = 0; i < (leftArr.length-1); ++i) {
		leftArr[i] = arr[k];
		++k;
	}
	rightArr[rightArr.length-1] = Infinity; // a sentinel value
	leftArr[leftArr.length-1] = Infinity; // a sentinel value
	var m = 0;
	var n = 0;
	for (var k = startLeft; k < stopRight; ++k) {
		if (leftArr[m] <= rightArr[n]) {
			arr[k] = leftArr[m];
			m++;
		}
		else {
			arr[k] = rightArr[n];
			n++;
		}
	}
	console.log("left array - ", leftArr);
	console.log("right array - ", rightArr);
}


var nums = [6,10,1,9,4,8,2,7,3,5];
console.log(nums);
console.log();
mergeSort(nums);
console.log();
console.log(nums);


/*
The function first tests to see if the array has a length of 0. If so, then the array doesn’t
need sorting and the function returns. Otherwise, two arrays are created, one to hold
the elements lesser than the pivot and the other to hold the elements greater than the
pivot. The pivot is then selected by selecting the first element of the array. Next, the
function loops over the array elements and places them in their proper array based on
their value relative to the pivot value. The function is then called recursively on both
the lesser array and the greater array. When the recursion is complete, the greater array
is concatenated to the lesser array to form the sorted array and is returned from the
function.
*/
function qSort(list) {
	if (list.length == 0) {
		return [];
	}
	var lesser = [];
	var greater = [];
	var pivot = list[0];
	for (var i = 1; i < list.length; i++) {
		if (list[i] < pivot) {
			lesser.push(list[i]);
		} 
		else {
			greater.push(list[i]);
		}
	}
	return qSort(lesser).concat(pivot, qSort(greater));
}

function qSort(arr)
{
	if (arr.length == 0) {
		return [];
	}
	var left = [];
	var right = [];
	var pivot = arr[0];
	for (var i = 1; i < arr.length; i++) {
		console.log("pivot: " + pivot + " current element: " + arr[i]);
		if (arr[i] < pivot) {
			console.log("moving " + arr[i] + " to the left");
			left.push(arr[i]);
		} else {
			console.log("moving " + arr[i] + " to the right");
			right.push(arr[i]);
		}
	}
	return qSort(left).concat(pivot, qSort(right));
}
var a = [];
for (var i = 0; i < 10; ++i) {
	a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log();
console.log(qSort(a));