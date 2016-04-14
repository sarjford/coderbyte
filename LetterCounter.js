function LetterCountI(str) { 


var newStr = str.split(" ");
//add placeholder to end of arry so first loop will iterate over it
newStr.push(NaN);

//define three variables:
//maxWord - keep track of the word with the greatest number of repeated letters
//maxLocal - keep track of the greatest number of repeated letters within each word
//maxGlobal - keep track of the greatest number of repeated letters over entire array
var maxWord = "-1";
var maxLocal = 0;
var maxGlobal = 1;

//two loops
for (var i = 0; i<newStr.length; i++){
		if (maxLocal > maxGlobal){
			maxGlobal = maxLocal;
			maxWord = newStr[i-1];
		}
	for (var y = 0; y<newStr[i].length; y++){
		var letter = (newStr[i][y]);
		var re = new RegExp(letter, "g");
		if (newStr[i].match(re).length > maxLocal){
			maxLocal = newStr[i].match(re).length;
		}
	}	
}
return maxWord;
}