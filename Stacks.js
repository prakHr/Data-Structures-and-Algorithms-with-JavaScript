function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length; 
}

/*
Elements are added to a stack using the push operation
When we push a new element
onto a stack, we have to store it in the top position and increment the top variable so
that the new top is the next empty position in the array
*/
function push(element) {
	this.dataStore[this.top++] = element;
}

/*
The peek operation returns the value stored at the top of a stack without
removing it from the stack.
The pop() function does the reverse of the push() function—it returns the element in
the top position of the stack and then decrements the top variabl
*/
function peek() {
	return this.dataStore[this.top-1];
}

/*
The
pop operation visits the top element of a stack, but it permanently removes the element
from a stack.
*/
function pop() {
	return this.dataStore[--this.top];
}

/*
The length property holds the
number of elements contained in a stack
*/
function length() {
	return this.top;
}
/*
The
clear operation removes all the elements from a stack
*/
function clear() {
	this.top = 0;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());

//definition of a function for converting a number to any of the bases 2 through 9
function mulBase(num, base) {
	var s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num /= base);
	} while (num > 0);
	var converted = "";
	while (s.length() > 0) {
		converted += s.pop();
	}
	return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);

/*
Once the complete original string is on the stack, we can create a new string by popping
each letter the stack. This process will create the original string in reverse order. We then
simply compare the original string with the reversed work, and if they are equal, the
string is a palindrome.
*/
function isPalindrome(word) {
	word=word.toLowerCase();
	var s = new Stack();
	for (var i = 0; i < word.length; ++i) {
		if(word[i]>='a' && word[i]<='z')
		{
			s.push(word[i]);
		}
	}
	var nword = "";
	for(var i=0;i<word.length;i++){

		if(word[i]>='a' && word[i]<='z' ){
			nword+=word[i];
		}
	}
	
	var rword = "";
	while (s.length() > 0) {
		rword += s.pop();
	}
	if (nword == rword) {
		return true;
	}
	else {
		return false;
	}
}

var word = "hello";
if (isPalindrome(word)) {
	console.log(word + " is a palindrome.");
}
else {
	console.log(word + " is not a palindrome.");
}
word = "A man, a plan, a canal: Panama"
if (isPalindrome(word)) {
	console.log(word + " is a palindrome.");
}
else {
	console.log(word + " is not a palindrome.");
}

//Simulating recursive processes using a stack
function fact(n) {
	var s = new Stack();
	while (n > 1) {
		s.push(n--);
	}
	var product = 1;
	while (s.length() > 0) {
		product *= s.pop();
	}
	return product;
}

for(var i=100;i<500;i++){
	var c=fact(i);
	if(c==Infinity){
		break;
	}
}
console.log(i); 