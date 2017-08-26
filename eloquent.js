//Minimum exercise
function min (arg1, arg2){
	if (arg1 > arg2){
    	return arg2;
    } else if (arg1 < arg2){
    	return arg1;
    } else {
    	return "The numbers are equal.";
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(2, 2));
//The numbers are equal.


//Recursion exerise
function isEven(number){
    if (number === 0){
        return true;
    } else if (number === 1){
        return false;
    } else if ( number < 0 ){
        return isEven(- number);
    } else {
        return isEven(number - 2);
    }
}

//Bean Counting
function countChar(string, letter){
		var count = 0;
  		for (var i = 0; i < string.length; i++){
      	if (string.charAt(i) === letter){
        	count += 1;
          return count;
        }
    }
}

function countBs(string){
    return countChar(string, "B");
}
