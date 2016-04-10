// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.


function LongestWord(sen) { 
	var sentence = sen.split(" ");
	
	var longestWord = [];
	
	sentence.forEach(function(element){
		if (longestWord.length < element.length){
			longestWord = element;
		}
	});

  return longestWord; 
         
}
   
// keep this function call here 
LongestWord(readline());  