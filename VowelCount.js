function VowelCount(str) { 

	var vowels = str.match(/[aeiou]/g).length;

  return vowels; 
         
}
   
// keep this function call here 
VowelCount("eeeeeeee");      