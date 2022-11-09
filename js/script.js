{
  function playGame(playerInput) {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Wylosowana liczba to: " + randomNumber);
    const argComputerMove = getMoveName(randomNumber);
    console.log(argComputerMove);
    const argPlayerMove = getMoveName(playerInput);
    console.log("Gracz wpisał: " + playerInput);
    console.log(argPlayerMove);

    clearMessages();
    function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      }

      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    }

    function displayResult(argComputerMove, argPlayerMove) {
      console.log("moves:", argComputerMove, argPlayerMove);
      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
        printMessage("Wygrywa komputer!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
        printMessage("Wygrywa komputer!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        printMessage("Wygrywa komputer!");
      } else if (argPlayerMove == "nieznany ruch") {
        printMessage("Nieznany ruch -> 5Wpisz wartość 1, 2 lub 3");
      } else {
        printMessage("Remis!");
      }
    }

    printMessage("Komputer zagrywa: " + argComputerMove);

    printMessage("Mój ruch to: " + argPlayerMove);

    displayResult(argComputerMove, argPlayerMove);
  }

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });

  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
