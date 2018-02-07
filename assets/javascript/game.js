var words = [word1, word2, word3, word4, etc.]
//these will need to be strings?

//somehow prompt user that the game is beginning and how to play it
document.onkeyup = function(event) {
var letter = String.fromCharCode(event.which).toLowerCase();
var computerChoice = words[Math.floor(Math.random() * words.length)];



}




//sample code below









// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
      document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = String.fromCharCode(event.which).toLowerCase();

        // If the letter is h, run the following functions/methods.
        if (letter === "h") {
          car.honk();
          reWriteStats();
        }

        // If the letter is d, run the following functions/methods.
        if (letter === "d") {
          car.driveToWork();
          reWriteStats();
        }

        // If the letter is w, run the following functions/methods.
        if (letter === "w") {
          car.driveAroundWorld();
          reWriteStats();
        }

        // If the letter is t, run the following functions/methods.
        if (letter === "t") {
          car.getTuneUp();
          reWriteStats();
        }
      };
