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

document.getElementById("answer").onkeydown = function (e) {
            // if(e.which == 9){
            //         return false;
            // }
    return false;
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

var resetBtn = document.getElementById("reset_btn");
if (resetBtn.addEventListener) {
    resetBtn.addEventListener("click", function(e){
        clearInterval(jsEventHandlers.interval);
        mathInterface.reset();
        document.getElementById('answer').value = "";
        document.getElementById("answer").focus();
        jsEventHandlers.interval = setInterval(function(){ mathInterface.start();}, 5000);
    }); 
}

var btn1 = document.getElementById("btn1");
if (btn1.addEventListener) {
    btn1.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.valuePrinter(1, document.getElementById('answer').value, "string");
        document.getElementById("answer").focus();
    }); 
}
var btn2 = document.getElementById("btn2");
if (btn2.addEventListener) {
    btn2.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.valuePrinter(2, document.getElementById('answer').value, "string");
        document.getElementById("answer").focus();
    }); 
}
var btn3 = document.getElementById("btn3");
if (btn3.addEventListener) {
    btn3.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.valuePrinter(3, document.getElementById('answer').value, "string");
        document.getElementById("answer").focus();
    }); 
}
var btn4 = document.getElementById("btn4");
if (btn4.addEventListener) {
    btn4.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.valuePrinter(4, document.getElementById('answer').value, "string");
        document.getElementById("answer").focus();
    }); 
}
var btn5 = document.getElementById("btn5");
if (btn5.addEventListener) {
    btn5.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.valuePrinter(5, document.getElementById('answer').value, "string");
        document.getElementById("answer").focus();
    }); 
}
var btn6 = document.getElementById("btn6");
if (btn6.addEventListener) {
    btn6.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.valuePrinter(6, document.getElementById('answer').value, "string");
        document.getElementById("answer").focus();
    }); 
}
var btn7 = document.getElementById("btn7");
if (btn7.addEventListener) {
    btn7.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.valuePrinter(7, document.getElementById('answer').value, "string");
        document.getElementById("answer").focus();
    }); 
}
var btn8 = document.getElementById("btn8");
if (btn8.addEventListener) {
    btn8.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.valuePrinter(8, document.getElementById('answer').value, "string");
        document.getElementById("answer").focus();
    }); 
}
var btn9 = document.getElementById("btn9");
if (btn9.addEventListener) {
    btn9.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.valuePrinter(9, document.getElementById('answer').value, "string");
        document.getElementById("answer").focus();
    }); 
}
var btn0 = document.getElementById("btn0");
if (btn0.addEventListener) {
    btn0.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.valuePrinter(0, document.getElementById('answer').value, "string");
        document.getElementById("answer").focus();
    }); 
}
var btnDel = document.getElementById("btnDel");
if (btnDel.addEventListener) {
    btnDel.addEventListener("click", function(e){
        document.getElementById('answer').value = numPad.backspace(document.getElementById('answer').value);
        document.getElementById("answer").focus();
    }); 
}
var enter = document.getElementById("enter");
if (enter.addEventListener) {
    enter.addEventListener("click", function(e){
        mathInterface.compareResults(document.getElementById('answer').value);
        document.getElementById('answer').value = "" ;
        resultsGenerator.triggured = true;
    }); 
}


var jsEventHandlers = new JSEventHandlers();
    