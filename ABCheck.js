// Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

// Input = "after badly" Output = "false"
// Input = "Laura sobs" Output = "true"

//My Answer:
function ABCheck(str) {
	var myString = str;
	console.log(myString);
	newArray = [];
	for (var i = 0; i<myString.length; i++){
		if (myString[i]==="a"){
			console.log(i);
			console.log(i-5);
			newArray.push(myString.slice(i-4, i+1));
			newArray.push(myString.slice(i, i+5));
		}
	}
	console.log(newArray);
	var test = false;
	newArray.forEach(function(string){
		if (string.startsWith("b") || string.endsWith("b") && string.length===5){
			test = true;
		}
	});
	return test;
}

//Way better answer:
function ABCheck(str) { 
  var patt = /(a...b|b...a)/
    return patt.test(str); 
}

ABCheck("Laura sobs");
// ABCheck("123advb");
// ABCheck("3bzzzazzzb");



