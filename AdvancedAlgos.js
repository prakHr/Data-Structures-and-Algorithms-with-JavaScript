//recursive solution of fibonacci series
function recurFib(n) {
	if (n < 2) {
		return n;
	}
	else {
		return recurFib(n-1) + recurFib(n-2);
	}	
}

//dynamically storage in array
function dynFib(n) {
	var val = [];
	for (var i = 0; i <= n; ++i) {
		val[i] = 0;
	}
	if (n == 1 || n == 2) {
		return 1;
	}
	else {
		val[1] = 1;
		val[2] = 2;
		for (var i = 3; i <= n; ++i) {
			val[i] = val[i-1] + val[i-2];
		}
		return val[n-1];
	}
}

//iterative solution based on dynamic one 
function iterFib(n) {
	var last = 1;
	var nextLast = 1;
	var result = 1;
	for (var i = 2; i < n; ++i) {
		result = last + nextLast;
		nextLast = last;
		last = result;
	}
	return result;
}
var start = new Date().getTime();
console.log(recurFib(30));
var stop = new Date().getTime();
console.log("recursive time - " + (stop-start) + "milliseconds");
console.log();

//For big numbers
for(var i=1000;i<10000;i++){
	var w=dynFib(i);
	if(w==Infinity)break;
}
console.log(i);// till i=1477 we can get result
start = new Date().getTime();
console.log(dynFib(1476));
stop = new Date().getTime();
console.log("dynamic programming time - " + (stop-start) + " milliseconds");



//longest common subsequence by storing it in array
function lcs(word1, word2) {
	var max = 0;
	var index = 0;
	var lcsarr = new Array(word1.length+1);
	for (var i = 0; i <= word1.length+1; ++i) {
		lcsarr[i] = new Array(word2.length+1);
		for (var j = 0; j <= word2.length+1; ++j) {
		lcsarr[i][j] = 0;
		}
	}
	for (var i = 0; i <= word1.length; ++i) {
		for (var j = 0; j <= word2.length; ++j) {
			if (i == 0 || j == 0) {
				lcsarr[i][j] = 0;
			}
			else {
				if (word1[i-1] == word2[j-1]) {
					lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
				}
				else {
					lcsarr[i][j] = 0;
				}
			}
			if (max < lcsarr[i][j]) {
				max = lcsarr[i][j];
				index = i;
			}
		}
	}
	var str = "";
	if (max == 0) {
		return "";
	}
	else {
		for (var i = index-max; i <= max; ++i) {
			str += word2[i];
	}
	return str;
	}
}

function max(a, b) {
	return (a > b) ? a : b;
}

/*
A classic problem in the study of algorithms is the knapsack problem. Imagine you are
a safecracker and you break open a safe filled with all sorts of treasure, but all you have
to carry the loot is a small backpack. The items in the safe differ in both size and value.
You want to maximize your take by filling the backpack with those items that are worth
the most.
There is, of course, a brute-force solution to this problem, but the dynamic programming
solution is more efficient. The key idea to solving the knapsack problem with a
dynamic programming solution is to calculate the maximum value for every item up
to the total capacity of the knapsack.
If the safe in our example has five items, the items have a size of 3, 4, 7, 8, and 9,
respectively, and values of 4, 5, 10, 11, and 13, respectively, and the knapsack has a
capacity of 16, then the proper solution is to pick items 3 and 5 with a total size of 16
and a total value of 23.
*/
function knapsack(capacity, size, value, n) {
	if (n == 0 || capacity == 0) {
		return 0;
	}
	if (size[n-1] > capacity) {
		return knapsack(capacity, size, value, n-1);
	}
	else {
	return max(value[n-1] +
		knapsack(capacity-size[n-1], size, value, n-1),
		knapsack(capacity, size, value, n-1));
	}
}
var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;
console.log(knapsack(capacity, size, value, n));

/*
Whenever we find a recursive solution to a problem, we can usually rewrite the solution
using a dynamic programming technique and end up with a more efficient program.
The knapsack problem can definitely be rewritten in a dynamic programming manner.
All we have to do is use an array to store temporary solutions until we get to the final
solution.
*/
function dKnapsack(capacity, size, value, n) {
	var K = [];
	var retStr="";
	for (var i = 0; i <= capacity+1; i++) {
		K[i] = [];
	}
	for (var i = 0; i <= n; i++) {
		for (var w = 0; w <= capacity; w++) {
			if (i == 0 || w == 0) {
				K[i][w] = 0;
			}
			else if (size[i-1] <= w) {
				K[i][w] = max(value[i-1] + K[i-1][w-size[i-1]],
				K[i-1][w]);
			}
			else {
				K[i][w] = K[i-1][w];
			}
			retStr+=(K[i][w] + " ");
		}
		retStr+="\n";
	}
	console.log(retStr);
	return K[n][capacity];
}
var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;
console.log(dKnapsack(capacity, size, value, n));

//greedy algorithm for solving the coin-changing problem
/*
Let’s say you buy
some items at the store and the change from your purchase is 63 cents. How does the
clerk determine the change to give you? If the clerk follows a greedy algorithm, he or
she gives you two quarters, a dime, and three pennies. That is the smallest number of
coins that will equal 63 cents without using half-dollars.
The makeChange() function starts with the highest denomination, quarters, and tries
to make as much change with them as possible. The total number of quarters is stored
in the coins array. Once the amount left becomes less than a quarter, the algorithm
moves to dimes, making as much change with dimes as possible. The total number of
dimes is then stored in the coins array. The algorithm then moves to nickels and pennies
in the same manner.
*/
function makeChange(origAmt, coins) {
	var remainAmt = 0;
	if (origAmt % .25 < origAmt) {
		coins[3] = parseInt(origAmt / .25);
		remainAmt = origAmt % .25;
		origAmt = remainAmt;
	}
	if (origAmt % .1 < origAmt) {
		coins[2] = parseInt(origAmt / .1);
		remainAmt = origAmt % .1;
		origAmt = remainAmt;
	}
	if (origAmt % .05 < origAmt) {
		coins[1] = parseInt(origAmt / .05);
		remainAmt = origAmt % .05;
		origAmt = remainAmt;
	}
	coins[0] = parseInt(origAmt / .01);
}


function showChange(coins) {
	if (coins[3] > 0) {
		console.log("Number of quarters - " + coins[3] + " - " + coins[3] * .25);
	}
	if (coins[2] > 0) {
		console.log("Number of dimes - " + coins[2] + " - " + coins[2] * .10);
	}
	if (coins[1] > 0) {
		console.log("Number of nickels - " + coins[1] + " - " + coins[1] * .05);
	}
	if (coins[0] > 0) {
		console.log("Number of pennies - " + coins[0] + " - " + coins[0] * .01);
	}
}
var origAmt = .63;
var coins = [];
makeChange(origAmt, coins);
showChange(coins);
/*
A greedy algorithm can be used to solve the knapsack problem if the items we are placing
in the knapsack are continuous in nature. In other words, the items must be things that
cannot be counted discretely, such as cloth or gold dust. If we are using continous items,
we can simply divide the unit price by the unit volume to determine the value of the
item. An optimal solution in this case is to place as much of the item with the highest
value into the knapsack as possible until the item is depleted or the knapsack is full,
followed by as much of the second-highest-value item as possible, and so on. The reason
we can’t find an optimal greedy solution using discrete items is because we can’t put
“half a television” into a knapsack. Discrete knapsack problems are known as 0-1 problems
because you must take either all or none of an item.
This type of knapsack problem is called a fractional knapsack problem. Here is the
algorithm for solving fractional knapsack problems:
1. Knapsack has a capacity W and items have values V and weights w.
2. Rank items by v/w ratio.
3. Consider items in terms of decreasing ratio.
4. Take as much of each item as possible.
*/
function ksack(values, weights, capacity) {
	var load = 0;
	var i = 0;
	var w = 0;
	while (load < capacity && i < 4) {
		if (weights[i] <= (capacity-load)) {
			w += values[i];
			load += weights[i];
		}
		else {
			var r = (capacity-load)/weights[i];
			w += r * values[i];
			load += weights[i];
		}
		++i;
	}
	return w;
}


var items = ["A", "B", "C", "D"];
var values = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];
var capacity = 30;
console.log(ksack(values, weights, capacity)); // displays 220