function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier';
	} else if (argMoveId == 3) {
		return 'nożyce';
	}

	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
	console.log('moves:', argComputerMove, argPlayerMove);
	if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
		printMessage('Ty wygrywasz!');
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		printMessage('Ty wygrywasz!');
	} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
		printMessage('Ty wygrywasz!');
	} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
		printMessage('Wygrywa komputer!');
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
		printMessage('Wygrywa komputer!');
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
		printMessage('Wygrywa komputer!');
	} else if (argPlayerMove == 'nieznany ruch') {
		printMessage('Nieznany ruch -> 5Wpisz wartość 1, 2 lub 3');
	} else {
		printMessage('Remis!')
	}
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
console.log(argComputerMove)

/* if(randomNumber == 1 ){
	computerMove = 'kamień';
}	else if( randomNumber == 2){
		computerMove = 'papier'
	}
	else if( randomNumber == 3){
		computerMove = 'nożyce'
	}
	else{
		computerMove = 'nieznany ruch'
	} */

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);
console.log(argPlayerMove)

/* if (playerInput == '1') {
	playerMove = 'kamień';
} else if (playerInput == '2') {
	playerMove = 'papier'
}
else if (playerInput == '3') {
	playerMove = 'nożyce'
}
else {
	playerMove = 'nieznany ruch'
}
 */
printMessage('Twój ruch to: ' + argPlayerMove);

displayResult(argComputerMove, argPlayerMove);