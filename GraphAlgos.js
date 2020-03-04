function Vertex(label) {
	this.label = label;
}

function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.addEdge = addEdge;
	this.toString = toString;
	this.showGraph = showGraph;
	this.showGraphModified = showGraphModified;
	this.dfs = dfs;
	this.bfs = bfs;
	this.hasPathTo = hasPathTo;
	this.pathTo = pathTo;
	this.topSort = topSort;
	this.topSortHelper = topSortHelper;
	this.marked = [];
	this.edgeTo = [];
	this.adj = [];
	this. vertexList = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
		this.adj[i].push("");
	}

	for (var i = 0; i < this.vertices; ++i) {
		this.marked[i] = false;
	}
	
}

//add edges to undirected graph
function addEdge(v,w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

//prints adjaceny representation of graph
function showGraph() {
	var retStr="";
	for (var i = 0; i < this.vertices; ++i) {
		retStr+=(i + " -> ");
		for (var j = 0; j < this.vertices; ++j) {
			if (this.adj[i][j] != undefined)
				retStr+=(this.adj[i][j] + ' ');
			}
		retStr+="\n";
	}
	console.log(retStr);
}

//does recursive depth first search by marking unseen nodes
function dfs(v) {
	this.marked[v] = true;
	// if statement for print is not required
	if (this.adj[v] != undefined){
		console.log("Visited vertex: " + v);
		
		for(var i=0;i<this.adj[v].length;i++){
			if(!this.marked[this.adj[v][i]])
				this.dfs(this.adj[v][i]);
		}
	}
	
}
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
//g.dfs(0);

//does breadth first search by visiting nodes layer by layer 
function bfs(s) {
	var queue = [];
	this.marked[s] = true;
	queue.unshift(s); // add to back of queue
	while (queue.length > 0) {
		var v = queue.shift(); // remove from front of queue
		if (v != undefined && typeof(v)!="string") {
			console.log("Visited vertex: " + v);
		}
		if (this.adj[v] != undefined){
			for (var i=0;i<this.adj[v].length;i++) {
				var w=this.adj[v][i];
			
				if (!this.marked[w]) {
					this.edgeTo[w] = v;
					this.marked[w] = true;
					queue.push(w);
				}
			}
		}
			
	}
}


// path from source being 0 to destination 
function pathTo(v) {
	var source = 0;
	if (!this.hasPathTo(v)) {
		return undefined;
	}
	var path = [];
	for (var i = v; i != source; i = this.edgeTo[i]) {
		path.push(i);
	}
	path.push(source);
	return path;
}
function hasPathTo(v) {
	return this.marked[v];
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.bfs(0);
var vertex = 4;
var paths = g.pathTo(vertex);
var pathStr="";
while (paths.length > 0) {
	if (paths.length > 1) {
		pathStr+=(paths.pop() + '-');
	}
	else {
		pathStr+=(paths.pop());
	}
}
console.log(pathStr);

//does topological sort after exausting dfs
function topSort() {
	var stack = [];
	var visited = [];
	for (var i = 0; i < this.vertices; i++) {
		visited[i] = false;
	}
	for (var i = 0; i < this.vertices; i++) {
		if (visited[i] == false) {
			this.topSortHelper(i, visited, stack);
		}
	}
	console.log(this.vertexList);
	// for (var i = 0; i < stack.length; i++) {
	// 	if (stack[i] != undefined && stack[i] != false) {
	// 		console.log(this.vertexList[stack[i]]);
	// 	}
	// }
}
function topSortHelper(v, visited, stack) {
	visited[v] = true;
	if(this.adj[v]!=undefined){
		for(var i=0;i<this.adj[v].length;i++) {
			var w=this.adj[v][i];
			if (!visited[w]) {
				this.topSortHelper(visited[w], visited, stack);
			}
		}
		stack.push(v);	
	}
		
	
}

// a new function to display symbolic names instead of numbers
function showGraphModified() {
	var visited = [];
	var retStr="";
	for (var i = 0; i < this.vertices; ++i) {
			retStr+=(this.vertexList[i] + " -> ");
			visited.push(this.vertexList[i]);
			for (var j = 0; j < this.vertices; ++j) {
			if (this.adj[i][j] != undefined) {
				if (visited.indexOf(this.vertexList[j]) < 0) {
					retStr+=(this.vertexList[j] + ' ');
				}
			}
		}
		retStr+="\n";
		visited.pop();
	}
	console.log(retStr);
}
g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList = ["CS1", "CS2", "Data Structures",
"Assembly Language", "Operating Systems",
"Algorithms"];
g.showGraphModified();
g.topSort();