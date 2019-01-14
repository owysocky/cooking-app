function gallonToLiter(gallon){
	return gallon * 3.785;
}
var gallon = parseInt(prompt("Please enter gallon(s): "))
alert(gallon+" is "+gallonToLiter(gallon)+ "liters.");



function literToGallon(liter){
	return liter / 3.785;
}
var liter = parseInt(prompt("Please enter liter(s): "))
alert(liter+" is "+literToGallon(liter).toFixed(3)+ "gallon(s).");
