//Have the function LetterCapitalize(str) take the str parameter being 
//passed and capitalize the first letter of each word. Words will 
//be separated by only one space. 

function LetterCapitalize(str) { 
	
	var capitalized = str.split(" ");
	console.log(capitalized);
	
	var newArray = [];
	
	capitalized.forEach(function(word){
		newArray.push(word.charAt(0).toUpperCase() + word.slice(1));
		console.log(newArray);
	});
return newArray.join(" ");
}
   
// keep this function call here 
LetterCapitalize(readline());           
