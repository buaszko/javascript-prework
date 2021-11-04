//guziki
function buttonClicked(argPlayerMove) {
  clearMessages();
  console.log(argPlayerMove + " został kliknięty");

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
  
  console.log("ruch gracza to: " + argPlayerMove);
  console.log("wylosowana liczba to: " + randomNumber);
  console.log("ruch komputera to: " + computerMove);
  displayResult(argPlayerMove, computerMove);

  //ruch gracza
  function getMoveName(argMoveId) {
    console.log("wywołano funkcję getMoveName z argumentem:" + argMoveId);
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
    if (
      argPlayerMove == "papier" && argComputerMove == "kamień"
    ||  argPlayerMove == "kamień" && argComputerMove == "nożyce"
    ||  argPlayerMove == "nożyce" && argComputerMove == "papier"
    ) {

    printMessage("Wygrywasz!");
    } else if (argPlayerMove == argComputerMove) {
      printMessage("REMIS!");
    } else {
      printMessage("Przegrywasz :(");
    }
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  }
}

const buttonRock = document.getElementById("button-rock");
buttonRock.addEventListener("click", function () {
  buttonClicked("kamień");
});
const buttonPaper = document.getElementById("button-paper");
buttonPaper.addEventListener("click", function () {
  buttonClicked("papier");
});
const buttonScissors = document.getElementById("button-scissors");
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
