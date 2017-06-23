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
	var EachGuess = String.fromCharCode(event.keyCode).toUpperCase();

	if (LettersGuessed.indexOf(EachGuess) < 0 && Letters.indexOf(EachGuess) >= 0) {
		LettersGuessed[LettersGuessed.length] = EachGuess; GuessesLeft--;
	}


	if (GuessesLeft === EachGuess) {
		Wins++;
		console.log("You have a seer's mind!");
		GuessesLeft = 9;
		LettersGuessed = [];
		ComputerGuess = Letters[Math.floor(Math.random() * Letters.length)]
		console.log("Wins:" + Wins + "Losses:" + Losses +"Guesses Left:" + GuessesLeft + "Letters Guessed" + LettersGuessed + "Computer Guess" + ComputerGuess);
	}

	if (GuessesLeft === 0) {
		Losses++;
		console.log("You have a seer's mind!");
		GuessesLeft = 9;
		LettersGuessed = [];
		ComputerGuess = Letters[Math.floor(Math.random() * Letters.length)]
		console.log("Wins:" + Wins + "Losses:" + Losses +"Guesses Left:" + GuessesLeft + "Letters Guessed" + LettersGuessed + "Computer Guess" + ComputerGuess);
	}
	
	
}