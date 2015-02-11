function MathOperation(){
}

MathOperation.prototype.mathOperationExec = function(valArray, operation){
	if (operation === "summation"){
		return mathOperation.arrValuesAddition(valArray);
	}else if (operation === "deduction") {
		if(valArray.length === 2){
			return valArray[0] - valArray[1];
		}else{
			return "invalid numbers of array length for deduction"
		}
	}else if (operation === "multiplication") {
		if(valArray.length === 2){
			return valArray[0] * valArray[1];
		}else{
			return "invalid numbers of array length for multification"
		}
	}else if (operation === "division") {	
		if(valArray.length === 2){
			return Math.round(valArray[0] / valArray[1]);
		}else{
			return "invalid numbers of array length for division"
		}
	}else {
		return "Undefined Mathematical Operation";
	}
}

MathOperation.prototype.arrValuesAddition = function(valArray){
	var sum = 0;
	for (key in valArray) {
		sum = sum + valArray[key];
	}
	return sum;
}

var mathOperation = new MathOperation();