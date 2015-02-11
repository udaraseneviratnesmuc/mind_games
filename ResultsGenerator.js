function ResultsGenerator(){
	this.systemResult = 0;
	this.marks = 0;
	this.triggured = true;
	this.level = 0;
	this.attempts = 0;
}

ResultsGenerator.prototype.compareResults = function(userValue) {
	if(this.systemResult === parseInt(userValue)){
		return true;
	}else{
		return false;
	}
}

ResultsGenerator.prototype.setMarks = function(result) {
	if(result === true){
		this.marks = this.marks + 5;
	}else{
		this.marks = this.marks - 2;
	}
	return this.marks;
}

ResultsGenerator.prototype.setLevel = function(currentMark) {
	if(this.attempts > 100 || currentMark > mindGamesConfigurations.markLevels[0]){
		if(this.attempts > 100 && currentMark < mindGamesConfigurations.markLevels[0]) {
			return 0.1;
		}else if(this.attempts > 150 && currentMark < mindGamesConfigurations.markLevels[0]){
			return 0.2;
		}else if(this.attempts > 200 && currentMark < mindGamesConfigurations.markLevels[0]){
			return 0.3;
		}else if(currentMark > mindGamesConfigurations.markLevels[0]){
			return 1;
		}
	} else if(currentMark > mindGamesConfigurations.markLevels[1]){
		return 2;
	}else if(currentMark > mindGamesConfigurations.markLevels[2]){
		return 3;
	}else{
		return 0;
	}
}

var resultsGenerator = new ResultsGenerator();
