function Node(data, left, right) {
	this.data = data;
	this.count = 1;
	this.left = left;
	this.right = right;
	this.show = show;

}
function show() {
	return this.data;
}
function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
	this.postOrder = postOrder;
	this.getMin = getMin;
	this.getMax = getMax;
	this.find = find;
	this.update = update;
}

function insert(data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	}
	else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					break;
				}
			}
			else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}

function preOrder(node) {
	if (!(node == null)) {
		console.log(node.show() + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}
function postOrder(node,arr) {
	if (!(node == null)) {
		arr.push(node);
		postOrder(node.left,arr);
		postOrder(node.right,arr);
		//console.log(node.show() + " ");

	}
	return arr;
}
function getMin() {
	var current = this.root;
	while (!(current.left == null)) {
		current = current.left;
	}
	return current.data;
}
function getCountNodes(bstInstance){
	var arr=[];
	arr=postOrder(bstInstance.root,arr);
	return arr.length;
}
function getMax() {
	var current = this.root;
	while (!(current.right == null)) {
	current = current.right;
	}
	return current.data;
}
function find(data) {
	var current = this.root;
	while (current.data != data) {
		if (data < current.data) {
			current = current.left;
		}
		else {
			current = current.right;
		}
		if (current == null) {
			return null;
		}
	}
	return current;
}
function remove(data) {
	root = removeNode(this.root, data);
}
function removeNode(node, data) {
	if (node == null) {
	return null;
	}
	if (data == node.data) {
		// node has no children
		if (node.left == null && node.right == null) {
		return null;
		}
		// node has no left child
		if (node.left == null) {
		return node.right;
		}
		// node has no right child
		if (node.right == null) {
		return node.left;
		}
		// node has two children
		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	}
	else if (data < node.data) {
		node.left = removeNode(node.left, data);
		return node;
	}
	else {
		node.right = removeNode(node.right, data);
		return node;
	}
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Count of BST is: "+getCountNodes(nums));
console.log("Inorder traversal: ");
inOrder(nums.root);
var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
console.log("\n");
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);

var values = [123,12,23];
for(var v=0;v<values.length;v++){
	var found = nums.find(values[v]);
	if (found != null) {
	console.log("Found " + values[v] + " in the BST.");
	}
	else {
	console.log(values[v] + " was not found in the BST.");
	}	
}

function update(data) {
	var grade = this.find(data);
	grade.count++;
	return grade;
}

function prArray(arr) {
	var retstr = (arr[0].toString() + ' ');
	for (var i = 1; i < arr.length; ++i) {
		retstr +=(arr[i].toString() + ' ');
		if (i % 10 == 0) {
			retstr +=("\n");
		}
	}
	console.log(retstr);
}

function genArray(length) {
	var arr = [];
	for (var i = 0; i < length; ++i) {
		arr[i] = Math.floor(Math.random() * 101);
	}
	return arr;
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
gradedistro.insert(grades[0]);
for (var i = 1; i < grades.length; ++i) {
	var g = grades[i];
	var grade = gradedistro.find(g);
	if (grade == null) {
		gradedistro.insert(g);
	}
	else {
		gradedistro.update(g);
	}
}

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var cont = "y";
function promptGrade() {
  return new Promise(function(resolve, reject) {
    var ask = function() {
      rl.question('Enter a Grade? ', function(answer) {
        grade = answer;
        if (/^[0-9]+$/.test(grade) ==true) {
          // internal ask() function still has access to resolve() from parent scope
          
          resolve(grade, reject);
        } else {
          // calling ask again won't create a new Promise - only one is ever created and only resolves on success
          console.log("grade is not valid it contains only positive numbers between 0 and inf");
          ask();
        }
      });
    };
    ask();
  });
}

function promptYesOrNo() {
  return new Promise(function(resolve, reject) {
    var ask = function() {
      rl.question('Look at another grade? ', function(answer) {
        bin = answer;
        if (bin=='y' || bin=='n') {
          // internal ask() function still has access to resolve() from parent scope
          
          resolve(bin, reject);
        } else {
          // calling ask again won't create a new Promise - only one is ever created and only resolves on success
          console.log("response is not valid it contains only y or n");
          ask();
        }
      });
    };
    ask();
  });
}

(async function start() {
	while (cont == "y") {
		console.log("\n\nEnter a grade: ");
		var g = await promptGrade();
		var aGrade = gradedistro.find(g);
		if (aGrade == null) {
			console.log("No occurrences of " + g);
		}
		else {
			console.log("Occurrences of " + g + ": " + aGrade.count);
		}
		
		
		cont = await promptYesOrNo();
	}
})();