


$(document).ready(function() {

var score = 0;
var guessLeft = 6;


// Variables
// =======================
var words = {
	w1: ["Montgomery"],
	w2: ["Juneau"],
	w3: ["Phoenix"],
	w4: ["Sacramento"],
	w5: ["Austin", "a", "u", "s", "t", "i", "n"],
	w6: ["Columbus"],
	w7: ["Trenton"],
	w8: ["Jackson"],
	w9: ["Augusta"],
	w10: ["Topeka"]
}

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
	"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


for (var i = 0; i<letters.length; i++){
	var letterBtn = $("<button>");
	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-letter", letters[i]);
	letterBtn.text(letters[i]);
	$("#buttons").append(letterBtn);
	console.log(letters[i]);

}
});

//function writeBlanks() {
//	for (var i = 0; i < words.w5[0].length; i++) {
//	document.write("_ ");
//}
//};

//writeBlanks();



//document.onkeyup = function(event) {

//	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
//	console.log(userInput);



//};

//random info:
//console.log(words.w10[0]);
//document.write("User Score = " + score);
//console.log(words.w2[0].length);
