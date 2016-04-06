function FirstReverse(str) { 
    
    var array = str.split("");

    var newArray = [];

    for (var i = array.length-1; i >= 0; i--){
      newArray.push(array[i]);
    }
    
  var newString = newArray.join("");
  return newString;
}