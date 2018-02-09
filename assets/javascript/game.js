


var words = ["w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9", "w10"];

var guesses = 5;
//var wordsIndex = 0; do I need this?//
//var wordsArray = [words.w1, words.w2, words.w3, words.w4, words.w5, words.w6, words.w7, words.w8, words.w9, words.w10]; do I need this?

var userGuess = ;

var correctLetter = ;

var computerChoice = ;

document.onkeyup = function(event) {
  var userGuess = event.key;
  var userGuess = userGuess.toLowerCase();

  if (userGuess === correctLetter) {
    document.write("A lucky guess");
  }
  else {
    var newGuesses = guesses - 1;

    document.write("Not today");
  }




};


// code snippets below //

//document.write(words[random]);

//for (var i = 0; i < vegetables.length; i++) {
//        console.log("I love " + vegetables[i]);
//      }

//function logArray(list) {
//        for (var j = 0; j < list.length; j++) {
  //        console.log(list[j]);
  //      }
  //    }

//      var userText = document.getElementById("user-text");

  //      document.onkeyup = function(event) {
  //        userText.textContent = event.key;

//var userGuess = event.key;

//var computerChoice = words[Math.floor(Math.random() * words.length)];

//document.onkeyup = function(event) {


//function updateScore() {
  //document.querySelector("#score").innerHTML = "Score: " + score;
//}
