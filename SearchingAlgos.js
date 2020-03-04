// finds the first position of element in array
function seqSearch(arr, data) {
	for (var i = 0; i < arr.length; ++i) {
		if (arr[i] == data) {
			return i;
		}
	}
	return -1;
}

// prints the array as string in batches of 10 elements in one line
function dispArr(arr) {
	var retstr = "";
	for (var i = 0; i < arr.length; ++i) {
		retstr += arr[i] + " ";
		if (i % 10 == 9) {
			retstr += "\n";
		}
	}
	if(i % 10 != 0)retstr += "\n";
	console.log(retstr);
}
//generate an array of random elements in the range of (0,101)  
function generateRandomNums(){
	var nums = [];
	for (var i = 0; i < 10; ++i) {
		nums[i] = Math.floor(Math.random() * 11);
	}
	return nums;
}

var nums=generateRandomNums();
dispArr(nums);
// // Include prompt module.
// var prompt = require('prompt');


// // This json object is used to configure what data will be retrieved from command line.
// var prompt_attributes = [
//     {
//         // The fist input text is assigned to name variable.
//         name: 'ending_variable',
//         // The name must match below regular expression.
//         validator: /^[0-9]+$/,
//         // If name is not valid then prompt below message.
//         warning: 'ending_variable is not valid it contains only positive numbers between 0 and inf'
//     }
// ];

// // Start the prompt to read user input.
// prompt.start();

// // Prompt and get user input then display those data in console.
// prompt.get(prompt_attributes, function (err, result) {
//     if (err) {
//         console.log(err);
//         return 1;
//     }else {
//         console.log('Command-line received data:');

//         // Get user input from result object.
        
//         var num = result.ending_variable;
//         console.log();
//         var position=seqSearch(nums,num);
//         if(position > -1){
//         	console.log(num + " is in the array at position " + position);
//         }
//         else{
//         	console.log(num + " is not in the array.");
//         }
//     }
// });

// find minimum element in an array
function findMin(arr) {
	var min = arr[0];
	for (var i = 1; i < arr.length; ++i) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}

// find maximum element in an array
function findMax(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; ++i) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
var minValue = findMin(nums);
console.log("The minimum value is: "+minValue);
var maxValue = findMax(nums);
console.log("The maximum value is: "+maxValue);

// self organizes the array
function seqSearchModified(arr, data) {
	for (var i = 0; i < arr.length; ++i) {
		if (arr[i] == data) {
			if (i > 0) {
				swap(arr,i,i-1);
			}
		return true;
		}
	}
	return false;
}

function swap(arr, index, index1) {
	temp = arr[index];
	arr[index] = arr[index1];
	arr[index1] = temp;
}
var numbers = [5,1,7,4,2,10,9,3,6,8];
console.log(numbers);
for (var i = 1; i <= 3; i++) {
	seqSearchModified(numbers, 4);
	console.log(numbers);
}

//better version of self organization
function seqSearchSelfOrganization_v2(arr, data) {
	for (var i = 0; i < arr.length; ++i) {
		if (arr[i] == data && i > (arr.length * 0.2)) {
			swap(arr,i,0);
			return true;
		}
		else if (arr[i] == data) {
			return true;
		}
	}
	return false;
}

//nums=generateRandomNums();
//dispArr(nums);
// // Include prompt module.
// var prompt = require('prompt');


// // This json object is used to configure what data will be retrieved from command line.
// var prompt_attributes = [
//     {
//         // The fist input text is assigned to name variable.
//         name: 'ending_variable',
//         // The name must match below regular expression.
//         validator: /^[0-9]+$/,
//         // If name is not valid then prompt below message.
//         warning: 'ending_variable is not valid it contains only positive numbers between 0 and inf'
//     }
// ];

// // Start the prompt to read user input.
// prompt.start();

// // Prompt and get user input then display those data in console.
// prompt.get(prompt_attributes, function (err, result) {
//     if (err) {
//         console.log(err);
//         return 1;
//     }else {
//         console.log('Command-line received data:');

//         // Get user input from result object.
        
//         var val = result.ending_variable;
//         console.log();
//         
//         if(seqSearchSelfOrganization_v2(nums,val)){
//         	console.log("Found element: ");
//         }
//         else{
//         	console.log(val + " is not in the array.");
//         }
//     }
// });


function binSearch(arr, data) {
	var upperBound = arr.length-1;
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		console.log("Current midpoint: " + mid);
		if (arr[mid] < data) {
			lowerBound = mid + 1;
		}
		else if (arr[mid] > data) {
			upperBound = mid - 1;
		}
		else {
			return mid;
		}
	}
	return -1;
}

function insertionsort(arr) {
	var temp, inner;
	for (var outer = 1; outer <= arr.length-1; ++outer) {
		temp = arr[outer];
		inner = outer;
		while (inner > 0 && (arr[inner-1] >= temp)) {
			arr[inner] = arr[inner-1];
			--inner;
		}
		arr[inner] = temp;
	}
}
// insertionsort(nums);
// dispArr(nums);
// console.log();
// // Include prompt module.
// var prompt = require('prompt');


// // This json object is used to configure what data will be retrieved from command line.
// var prompt_attributes = [
//     {
//         // The fist input text is assigned to name variable.
//         name: 'search_variable',
//         // The name must match below regular expression.
//         validator: /^[0-9]+$/,
//         // If name is not valid then prompt below message.
//         warning: 'ending_variable is not valid it contains only positive numbers between 0 and inf'
//     }
// ];

// // Start the prompt to read user input.
// prompt.start();

// // Prompt and get user input then display those data in console.
// prompt.get(prompt_attributes, function (err, result) {
//     if (err) {
//         console.log(err);
//         return 1;
//     }else {
//         console.log('Command-line received data:');

//         // Get user input from result object.
        
//         var val = result.search_variable;
//         //console.log();
//         var retVal = binSearch(nums,val);
//         if(retVal >= 0){
//         	console.log("Found " + val + " at position " + retVal);
//         }
//         else{
//         	console.log(val + " is not in the array.");
//         }
//     }
// });

//counts the number of occurrences of an element in an array
function count(arr, data) {
	var count = 0;
	var position = binSearch(arr, data);
	if (position > -1) {
		++count;
		for (var i = position-1;i > 0; --i) {
			if (arr[i] == data) {
				++count;
			}
			else {
				break;
			}
		}
		for (var i = position+1; i < arr.length; ++i) {
			if (arr[i] == data) {
				++count;
			}
			else {
				break;
			}
		}
	}
	return count;
}

// nums=generateRandomNums();
// insertionsort(nums);
// dispArr(nums);
// console.log();
// // Include prompt module.
// var prompt = require('prompt');


// // This json object is used to configure what data will be retrieved from command line.
// var prompt_attributes = [
//     {
//         // The fist input text is assigned to name variable.
//         name: 'search_variable',
//         // The name must match below regular expression.
//         validator: /^[0-9]+$/,
//         // If name is not valid then prompt below message.
//         warning: 'ending_variable is not valid it contains only positive numbers between 0 and inf'
//     }
// ];

// // Start the prompt to read user input.
// prompt.start();

// // Prompt and get user input then display those data in console.
// prompt.get(prompt_attributes, function (err, result) {
//     if (err) {
//         console.log(err);
//         return 1;
//     }else {
//         console.log('Command-line received data:');

//         // Get user input from result object.
        
//         var val = result.search_variable;
//         console.log();
//         var retVal = count(nums,val);
//         console.log("Found " + retVal + " occurrences of " + val + ".");
//     }
// });


var fs = require('fs'), filename = "C:\\Users\\HP\\Desktop\\DSA-JS\\words.txt";
fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;
	console.log('OK: ' + filename);
	//console.log(data);
	var punctuationless = data.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g,"");
	var finalString = punctuationless.replace(/\s{2,}/g," ");
	//console.log(finalString);
	//console.log(finalString.split(" "));
	var words = finalString.split(" ");
	var word = "rhetoric";
	var start = new Date().getTime();
	var position = seqSearch(words, word);
	var stop = new Date().getTime();
	var elapsed = stop - start;
	if (position >= 0) {
		console.log("Found " + word + " at position " + position + ".");
		console.log("Sequential search took " + elapsed + " milliseconds.");
	}
	else {
		console.log(word + " is not in the file.");
	}

	start = new Date().getTime();
	insertionsort(words);
	position = binSearch(words, word);
	stop = new Date().getTime();
	elapsed = stop - start;
	if (position >= 0) {
		console.log("Found " + word + " at position " + position + ".");
		console.log("Binary search took " + elapsed + " milliseconds.");
	}
	else {
		console.log(word + " is not in the file.");
	}

});

