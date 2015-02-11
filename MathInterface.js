function MathInterface(){
}

MathInterface.prototype.callOperation = function(digitRange, operation, mode){
	if(resultsGenerator.triggured === false){
	 	mathInterface.compareResults(document.getElementById('answer').value);
	 	//resultsGenerator.triggured = true;
	}else{
		resultsGenerator.triggured = false;
	}
	var inputValArr = [];
	if(mode > 2 && (operation === "division" || operation === "substraction")){
		alert("Mode cannot be more than 2 if the operation is division or substraction");
	}else{
		inputValArr = mathInterface.createInputValArr(digitRange, mode);
	}
	mathInterface.setValuesToLabels(inputValArr, operation);
	var systemResult = mathOperation.mathOperationExec(inputValArr, operation);
	resultsGenerator.systemResult = systemResult;
	//mathInterface.setUI(systemResult, "result");
}

MathInterface.prototype.createInputValArr = function(digitRange, valCount){
	var valArray = [];
	for(var counter = 0; counter < valCount; counter ++){
		valArray.push(numberRandomizer.randomNumberGen(digitRange));
	}
	return valArray;
}

MathInterface.prototype.setValuesToLabels = function(valArr, operation){
	var statement = "";
	if(operation === "summation"){
		for(key in valArr){
			statement = statement + valArr[key] + " + ";
		}
	}else if(operation === "deduction"){
		for(key in valArr){
			statement = statement + valArr[key] + " - ";
		}
	}else if(operation === "multiplication"){
		for(key in valArr){
			statement = statement + valArr[key] + " * ";
		}
	}else if(operation === "division"){
		for(key in valArr){
			statement = statement + valArr[key] + " / ";
		}
	}else{
		statement = "Invalid operation";
	}
	//console.log(statement);
	mathInterface.setUI(statement.slice(0, -2), "mathematicalStatement");
}

MathInterface.prototype.setUI = function(statement, position){
	document.getElementById(position).innerHTML = statement;
	if(position === "correctness"){
		document.getElementById('correctness').innerHTML = (statement.toString())[0].toUpperCase() + (statement.toString()).slice(1);
		if(statement === false){
			document.getElementById('correctness').style.color = "red";
		}else{
			document.getElementById('correctness').style.color = "green";
		}
	}
}

MathInterface.prototype.compareResults = function(userValue){
	var finalResult = resultsGenerator.compareResults(userValue);
	var totalCurrentMark = resultsGenerator.setMarks(finalResult);
	var level = mindGamesConfigurations.markLevelsNames[resultsGenerator.setLevel(totalCurrentMark)];
	this.setUI(finalResult, "correctness");
	this.setUI(totalCurrentMark, "marks");
	this.setUI(level, "level");
}

MathInterface.prototype.start = function(){
	var operationSwitch = 0;
	if(resultsGenerator.level == 0){
		mathInterface.callOperation(3, mindGamesConfigurations.mathOperations[operationSwitch], 2);
	}else if(resultsGenerator.level == 0.1){
		if(operationSwitch > 1){
			operationSwitch = 0;
		}
		mathInterface.callOperation(3, mindGamesConfigurations.mathOperations[operationSwitch], 2);
		operationSwitch = operationSwitch + 1;
	}else if(resultsGenerator.level == 0.2){
		if(operationSwitch > 2){
			operationSwitch = 0;
		}
		mathInterface.callOperation(3, mindGamesConfigurations.mathOperations[operationSwitch], 2);
		operationSwitch = operationSwitch + 1;
	}else if(resultsGenerator.level == 0.3){
		if(operationSwitch > 3){
			operationSwitch = 0;
		}
		mathInterface.callOperation(3, mindGamesConfigurations.mathOperations[operationSwitch], 2);
		operationSwitch = operationSwitch + 1;
	}else if(resultsGenerator.level == 1){
		if(operationSwitch > 3){
			operationSwitch = 0;
		}
		mathInterface.callOperation(3, mindGamesConfigurations.mathOperations[operationSwitch], 2);
		operationSwitch = operationSwitch + 1;
	}else if(resultsGenerator.level == 2){
		if(operationSwitch > 3){
			operationSwitch = 0;
		}
		if(operationSwitch == 1 || operationSwitch == 3){
			mathInterface.callOperation(3, mindGamesConfigurations.mathOperations[operationSwitch], 2);
		}else{
			mathInterface.callOperation(3, mindGamesConfigurations.mathOperations[operationSwitch], 2);
		}
		operationSwitch = operationSwitch + 1;
	}else if(resultsGenerator.level == 3){
		if(operationSwitch > 3){
			operationSwitch = 0;
		}
		if(operationSwitch == 1 || operationSwitch == 3){
			mathInterface.callOperation(4, mindGamesConfigurations.mathOperations[operationSwitch], 2);
		}else{
			mathInterface.callOperation(4, mindGamesConfigurations.mathOperations[operationSwitch], 3);
		}
		operationSwitch = operationSwitch + 1;
	}

} 
 
var mathInterface = new MathInterface();