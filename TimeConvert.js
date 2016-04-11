
// Challenges ⌄Courses ⌄ProjectsProfile

// Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function TimeConvert(num) { 
	
	if (num < 60){
		return ("0:"+num);
	}else{
	return (Math.round(num/60) + ":" + (num-(Math.round(num/60)*60)));
}


         
}

TimeConvert(120);


// Input = 126 Output = "2:6"
// Input = 45 Output = "0:45"