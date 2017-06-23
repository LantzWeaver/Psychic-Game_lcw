var Letters = ["a","b", "c", "d", "e", "f", "g", "h",
 "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
  "t", "u", "v", "w", "x", "y", "z"];

var Wins = 0;
var Losses = 0;
var GuessesLeft = 9;
var LettersGuessed = [];
var EachGuess = null;

var ComputerGuess = Letters[Math.floor(Math.random() * Letters.length)]
console.log("Wins:" + Wins + "Losses:" + Losses +"Guesses Left:" + GuessesLeft + "Letters Guessed" + LettersGuessed + "Computer Guess" + ComputerGuess);

document.onkeyup = function(e) {
	var EachGuess = String.fromCharCode(e.keyCode).toLowerCase();

	if (LettersGuessed.indexOf(EachGuess) < 0 && Letters.indexOf(EachGuess) >= 0) {
		LettersGuessed[LettersGuessed.length] = EachGuess; GuessesLeft--;
	}


	if (GuessesLeft == EachGuess) {
		Wins++;
		console.log("You have a seer's mind!");
		GuessesLeft = 9;
		LettersGuessed = [];
		ComputerGuess = Letters[Math.floor(Math.random() * Letters.length)]
		console.log("Wins:" + Wins + "Losses:" + Losses +"Guesses Left:" + GuessesLeft + "Letters Guessed" + LettersGuessed + "Computer Guess" + ComputerGuess);
	}

	if (GuessesLeft == 0) {
		Losses++;
		console.log("You have a seer's mind!");
		GuessesLeft = 9;
		LettersGuessed = [];
		ComputerGuess = Letters[Math.floor(Math.random() * Letters.length)]
		console.log("Wins:" + Wins + "Losses:" + Losses +"Guesses Left:" + GuessesLeft + "Letters Guessed" + LettersGuessed + "Computer Guess" + ComputerGuess);
	}
	
	/*var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I'm thinking of</h4</p>" + "<p><h4>Wins: " + Wins + "</h4></p>" + "<p><h4>Losses:" + Losses + "</h4></p>" + "<p><h4>Guesses Left:" + GuessesLeft + "</h4></p>" + "<p><h4>Letters Guessed: " + LettersGuessed + "</h4></p>";
	document.querySelector("#game").innerHTML = html;*/
}