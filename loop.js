// Include prompt module.
var prompt = require('prompt');

// This json object is used to configure what data will be retrieved from command line.
var prompt_attributes = [
    {
        // The fist input text is assigned to name variable.
        name: 'ending_variable',
        // The name must match below regular expression.
        validator: /^[0-9]+$/,
        // If name is not valid then prompt below message.
        warning: 'ending_variable is not valid it contains only positive numbers between 0 and inf'
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
        
        
        var end = result.ending_variable;

		for (var i = 1; i <= end; ++i) {
		// Display user input in console log.
        
		console.log(i);
		}
		var sum=0
		var number=1;
		while(number<=end){
			sum+=number;
			++number;
		}
		console.log("Sum using while loop for "+end+":"+sum);

    }
});