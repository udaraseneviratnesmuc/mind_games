function JSEventHandlers(){
    this.interval;
    this.intervalSwitch = 0;
}

var x = document.getElementById("answer");
if (x.addEventListener) {
    x.addEventListener("keydown", function(e){
    	if(e.keyCode === 13 ){
    		mathInterface.compareResults(document.getElementById('answer').value);
    		document.getElementById('answer').value = "" ;
            resultsGenerator.triggured = true;
           // mathInterface.callOperation(3, "summation", 2);
    	}
    });	
} else if (x.attachEvent) {
    x.attachEvent("keydown", function(e){
    	if(e.keyCode === 13 ){
    		mathInterface.compareResults(document.getElementById('answer').value);
    		document.getElementById('answer').value = "" ;
            resultsGenerator.triggured = true;
           // mathInterface.callOperation(3, "summation", 2);
    	}
 });
}

var startBtn = document.getElementById("start_btn");
if (startBtn.addEventListener) {
    startBtn.addEventListener("click", function(e){
        if(jsEventHandlers.intervalSwitch == 0){
            jsEventHandlers.interval = setInterval(function(){ mathInterface.start();}, 5000);
            startBtn.value = "Pause";
            jsEventHandlers.intervalSwitch = 1;
            document.getElementById('answer').disabled = false;
            document.getElementById('mathematicalStatement').innerHTML = "";
            document.getElementById("answer").focus();
        } else if(jsEventHandlers.intervalSwitch == 1){
             clearInterval(jsEventHandlers.interval);
             startBtn.value = "Start";
             jsEventHandlers.intervalSwitch = 0;
             resultsGenerator.systemResult = null;
             document.getElementById('answer').disabled = true;
             document.getElementById('mathematicalStatement').innerHTML = "Paused";
        }
    }); 
}




var jsEventHandlers = new JSEventHandlers();
    