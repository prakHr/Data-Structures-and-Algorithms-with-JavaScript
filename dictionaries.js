function Dictionary(){
	this.add = add;
	this.datastore = new Array();
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clearAll = clearAll; 
	this.showSixthLengthBarcode = showSixthLengthBarcode;
}
// adds key,value pair to dataStore
function add(key, value) {
this.datastore[key] = value;
}
// finds value corresponding to key
function find(key) {
return this.datastore[key];
}
// removes the (key,value) pair
function remove(key) {
delete this.datastore[key];
}

// prints (key,value) pair sorted according to keys
function showAll() {
	
	Object.keys(this.datastore).sort().forEach((key)=>
	{
		console.log(key + " -> " + this.datastore[key]);
	});
}

// deletes all the key,value pairs
function clearAll(){
	Object.keys(this.datastore).forEach((key)=>
	{
		delete this.datastore[key];
	});	
}
// if barocodeNumber of length 6 is present then stores them into new array
function showSixthLengthBarcode(){
	var barcode=new Dictionary();
	Object.keys(this.datastore).forEach((key)=>
	{
		var k=this.datastore[key].length;
		if(k==6)
		{
			//console.log(key + " -> " + this.datastore[key]);
			barcode.add(key,this.datastore[key]);	
		}
	});
	return barcode;
}

// var pbook = new Dictionary();
// pbook.add("Mike","123");
// pbook.add("David", "345");
// pbook.add("Cynthia", "456");
// console.log("David's extension: " + pbook.find("David"));
// pbook.remove("David");
// pbook.showAll();

// counts the number of key,value pair present
function count(){

	var n=0;
	Object.keys(this.datastore).forEach((key)=>
	{
		++n;
	});
	return n;
}

var barcodes = new Dictionary();
barcodes.add("crayons","123456");
barcodes.add("special_pen","123444");
barcodes.add("color-pencil","1223456");
barcodes.add("rangoli","654321");
console.log(barcodes.find("rangoli"));
console.log(barcodes.find("rangoli-x"));

var sixthLengthBarcode=barcodes.showSixthLengthBarcode();
console.log(sixthLengthBarcode.datastore);
console.log(sixthLengthBarcode.count());
//barcodes.showAll();
//barcodes.clearAll();
//console.log("Barcodes Dictionary length is:"+barcodes.count());

//takes string as input(words seperated with spaces) and returns frequency array of them
function storeNumberOfOccurrencesInAWord(text){
	var my_array=text.split(" ");
	var freqDict=new Dictionary();
	for(var i=0;i<my_array.length;i++)
	{
		if(freqDict.find(my_array[i])==undefined)
		{
			freqDict.add(my_array[i],1);
		}
		else{
			freqDict.add(my_array[i],freqDict.find(my_array[i])+1);
		}	
		
	}
	return freqDict;

}
var prompt = require('prompt');

// This json object is used to configure what data will be retrieved from command line.
var prompt_attributes = [
    {
        // The fist input text is assigned to username variable.
        name: 'text',
        // The username must match below regular expression.
        validator: /^[a-zA-Z ]*$/,
        // If username is not valid then prompt below message.
        warning: 'ending_variable is not valid it contains only alphabets and spaces'
    }
];

// Start the prompt to read user input.
prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    }else {
        console.log('Command-line received data:');

        // Get user input from result object.
        
        
        var text = result.text;

		console.log(storeNumberOfOccurrencesInAWord(text).datastore);
		

    }
});