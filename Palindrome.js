function Palindrome(str) { 
	
for (var i = 0; i < Math.ceil(str.length/2); i++){

	if (str.charAt(i) !== str.charAt(str.length-1-i)){
		return false;
	} else {return true;
}   
}
}

Palindrome("eye"); 