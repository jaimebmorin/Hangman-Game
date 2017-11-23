$(document).ready(function() {
//
var score = 0;
var guessLeft = 6;
var words = {
	w1: ["Montgomery","m","o","n","t","g","o","m","e","r","y"],
	w2: ["Juneau","j","u","n","e","a","u"],
	w3: ["Phoenix","p","h","o","e","n","i","x"],
	w4: ["Sacramento","s","a","c","r","a","m","e","n","t","o"],
	w5: ["Austin","a","u","s","t","i","n"],
	w6: ["Columbus","c","o","l","u","m","b","u","s"],
	w7: ["Trenton","t","r","e","n","t","o","n"],
	w8: ["Jackson","j","a","c","k","s","o","n"],
	w9: ["Augusta","a","u","g","u","s","t","a"],
	w10: ["Topeka","t","o","p","e","k","a"]
}
var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var wordsPossible=[words.w1, words.w2, words.w3, words.w4, words.w5,words.w6,words.w7,words.w8,words.w9, words.w10];

var temp=Math.floor((Math.random() * 9));
var wordChosen=wordsPossible[temp];
console.log(wordChosen[0]);


for (var i=0; i<letters.length; i++){
	var letterBtn = $("<button>");
	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-button", letters[i]);
	letterBtn.text(letters[i]);
	$("#buttons").append(letterBtn);
}

for (var i=0; i<wordChosen[0].length; i++){
	var wordBtn=$("<div>");
	wordBtn.addClass("word-button letter word-button-color");
	wordBtn.attr("data-word", wordChosen[i+1]);
	wordBtn.text(" ");
	$("#wordSelected").append(wordBtn);
}

//for clicks - still can't figure it out - will use button presses for now

$(".letter-button").on("click", function() {
var guess = $("<div>");
//guess.addClass("letter fridge-color");
guess.text($(this).attr("data-button"));
console.log(guess.getData);
//$("#display").append(fridgeMagnet);
})

//attempt with user imputing via keyboard

// document.onkeyup = function(event) {
// var userInput = String.fromCharCode(event.keyCode).toLowerCase();
//	for (var i=0; i<wordChosen[0].length; i++)
//		var wordBtn=$("<div>");
//		wordBtn.addClass("letter-button letter letter-button-color");
//		wordBtn.attr("data-letter", wordChosen[i+1]);
//		if (userInput = wordChosen[i+1]) {
//			wordBtn.text(wordChosen[i+1]);
//		} else {
//			wordBtn.text(" ");
//		}
//		$("#wordSelected").append(wordBtn);
//};

//};

//random info:
//console.log(words.w10[0]);
//document.write("User Score = " + score);
//console.log(words.w2[0].length);


});