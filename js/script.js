var argButtonName, buttonPaper, buttonRock, buttonScissors;

//guziki
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + " został kliknięty");

  var argMoveId,
    argPlayerMove,
    argComputerMove,
    computerMove,
    playerMove,
    randomNumber,
    playerInput;


  console.log("ruch gracza to: " + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("wylosowana liczba to: " + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log("ruch komputera to: " + computerMove);
  displayResult(playerMove, computerMove);

  //ruch gracza
  function getMoveName(argMoveId) {
    console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      printMessage(
        "Nie znam ruchu o id " +
          argMoveId +
          '. Zakładam, że chodziło o "kamień".'
      );
      return "kamień";
    }
  }

  /**
   * Ruch komputera i wynik
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log(
      "wywołano funkcję displayResults z argumentami: " +
        argPlayerMove +
        ", " +
        argComputerMove
    );
    if (argPlayerMove == "papier" && argComputerMove == "kamień") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == argComputerMove) {
      printMessage("REMIS!");
    } else {
      printMessage("Przegrywasz :(");
    }
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  }
}
buttonRock = document.getElementById("button-rock");
buttonRock.addEventListener("click", function () {
  buttonClicked("kamień");
});
buttonPaper = document.getElementById("button-paper");
buttonPaper.addEventListener("click", function () {
  buttonClicked("papier");
});
buttonScissors = document.getElementById("button-scissors");
buttonScissors.addEventListener("click", function () {
  buttonClicked("nożyce");
});

//komputer//
//var computerMove, randomNumber;
//randomNumber = Math.floor(Math.random() * 3 + 1);
//console.log('wylosowana liczba to: ' + randomNumber);
//
//if (randomNumber == '1') {
//    computerMove = 'kamień';
//}
//    else if (randomNumber == '2') {
//    computerMove = 'papier';
//}
//    else if (randomNumber == '3') {
//    computerMove = 'nożyce';
//}

//gracz//
//var playerMove, playerInput;
//playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
//console.log('Wpisana odpowiedź to: ' + playerInput);
//
//if (playerInput == '1') {
//    playerMove = 'kamień';
//}
//    else if (playerInput  == '2') {
//    playerMove = 'papier';
//}
//    else if (playerInput == '3') {
//    playerMove = 'nożyce';
//}
//    else {
//    playerMove = 'nieznany ruch';
//    printMessage('Błędny wybór!' + playerMove);
//
