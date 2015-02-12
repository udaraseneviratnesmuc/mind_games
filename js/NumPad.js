function NumPad(){

}

NumPad.prototype.valuePrinter = function(newValue, existValue, conversionType){
	if(existValue == undefined){
		existValue = "";
	}
	return existValue.concat(this.valueConverter(newValue, conversionType));
}

NumPad.prototype.valueConverter = function(value, conversionType){
	if(conversionType === "string"){
		return String(value);
	}else if(conversionType === "int"){
		return Number(value);
	}else if(conversionType === "float"){
		return Number(value);
	}else if(conversionType === "boolean"){
		if(value === "true"){
			return 1;
		}else if(value === "false"){
			return 0;
		}else if(value === 0){
			return true;
		}else if(value === 1){
			return false;
		}else{
			console.log("Unknown value type");
		}
	}else{
		console.log("Unknown value type");
	}
}

NumPad.prototype.backspace = function(value){
	return value.slice(0, -1);
}

var numPad = new NumPad();