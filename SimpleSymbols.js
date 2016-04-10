//Have the function SimpleSymbols(str) take the str parameter 
// being passed and determine if it is an acceptable sequence by 
// either returning the string true or false. The str parameter 
// will be composed of + and = symbols with several letters between 
// them (ie. ++d+===+c++==a) and for the string to be true each letter 
// must be surrounded by a + symbol. So the string to the left would be 
// false. The string will not be empty and will have at least one letter. 

//NOTE - probably not the most efficient solution but I was pleased when
//it finally passed

function SimpleSymbols(str) { 

var myString = str;
// return /[a-z]/i.test(myString);

var array = [];

for (var y=0; y<myString.length; y++){
	if (/[a-z]/i.test(myString[y])){
		array.push(myString.slice(y-1, y+2));
		console.log(array);
	}
}
var count = 0;
for (var i=0; i<array.length; i++){
	if (array[i][0] === "+" && array[i][2] === "+"){
		count = count +1;
}
}
if (count === array.length){
	return true;
} else {
	return false;
}
}