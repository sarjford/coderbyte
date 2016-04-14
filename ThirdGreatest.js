function ThirdGreatest(strArr) { 
var newArray = strArr.sort(function(a, b){
  return b.length - a.length;
	});
  return newArray[2];  
}