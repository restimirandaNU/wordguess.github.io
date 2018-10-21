//GLOBAL VARIABLES
var doubleWord = ['a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'];
var randomWord = ['summer', 'autumn', 'winter', 'fall'];
var pickWord = "";
var alphaInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
//Game Counter
var winCount = 0;
var loseCount = 0;
var guessesLeft = 12;
var rightGuessCounter = 0;

function reset() {
    pickWord = randomWord[Math.floor(Math.random() * randomWord.length)];
    alphaInWord = pickWord.split('');
    numBlanks = alphaInWord.length;

    //RESET
    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesLeft = 12;
    wrongLetters = [];
    blanksAndSuccesses = [];
    doubleWord = ['a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'];
    test = false;
    startGame();
}
function startGame() {
    pickWord = randomWord[Math.floor(Math.random() * randomWord.length)];
    alphaInWord = pickWord.split('');
    numBlanks = alphaInWord.length;

    //RESET
    rightGuessCounter = 0;
    guessesLeft = 12;
    wrongLetters = [];
    blanksAndSuccesses = [];
    doubleWord = ['a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'];


    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_');
        document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
    }

    document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = loseCount;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;
}


function compareLetters(userKey) {

    if (pickWord.indexOf(userKey) > -1) {

        for (var i = 0; i < numBlanks; i++) {

            if (alphaInWord[i] === userKey) {
                rightGuessCounter++;
                blanksAndSuccesses[i] = userKey;
                document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
            }
        }

    }
    else {
        wrongLetters.push(userKey);
        guessesLeft--;

        document.getElementById('numGuesses').innerHTML = guessesLeft;
        document.getElementById('wrongGuesses').innerHTML = wrongLetters;

    }



}
function winLose() {

    if (rightGuessCounter === numBlanks) {

        winCount++;

        document.getElementById('winCounter').innerHTML = winCount;
        alert('Congratulations. You have won!');
        reset();
    }

    else if (guessesLeft === 0) {

        loseCount++;

        document.getElementById('lossCounter').innerHTML = loseCount;
        alert('You have lost');
        reset();
    }
}


//Main

startGame();
document.onkeyup = function (event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < doubleWord.length; i++) {
        if (letterGuessed === doubleWord[i] && test === true) {
            var spliceDword = doubleWord.splice(i, 1);
            compareLetters(letterGuessed);
            winLose();
        }
    }

}
