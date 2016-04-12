// Using the JavaScript language, have the function WordCount(str) 
// take the str string parameter being passed and return the number 
// of words the string contains (ie. "Never eat shredded wheat" would 
// return 4). Words will be separated by single spaces. 


function WordCount(str) { 
	var test = str.split(" ");	
	return test.filter(function(element){
		return /[a-bA-z]/.test(element);	
	}).length;
}
   
WordCount("hello 222 five");  //returns 2

//I guess they were counting integer strings as words too, so this
//code passes their tests as well:

function WordCount(str) { 
return str.split(" ").length;
}
WordCount("hello 222 five");  //returns 3