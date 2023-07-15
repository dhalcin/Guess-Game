let computerNumber = 0;
let count = 0;
let guessd = false;

function getNumber() {
    computerNumber += Math.floor(Math.random() * 10) + 1;
}

const userInput = document.getElementById('NumberUser');
const buttonPlay = document.getElementById('Play');
const buttonReset = document.getElementById('Reset');
const divResult = document.getElementById('result');
const countPar = document.createElement('p');

getNumber();

function resetGame() {
    userInput.value = '';
    computerNumber = 0;
    guessd = false;
    getNumber();
    count = 0;
    divResult.innerHTML = '';
}

function game() {
    if (guessd) {
        resetGame();
        return;
    }
    const userNumber = userInput.value;
    console.log(computerNumber);
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10 || userNumber%1 !== 0) {
        alert("Error ingresa un valor correcto");
        userInput.value = '';

    } else {
        count++;
        if (computerNumber == userNumber) {
            countPar.textContent = `Adivinaste el numero en tu intento ${count}`;
            countPar.setAttribute('id', `int${count}`);
            divResult.appendChild(countPar);
            guessd = true;

        } else {
            countPar.textContent = `Intento : ${count}`;
            countPar.setAttribute('id', `int${count}`);
            divResult.appendChild(countPar);

            if (count === 3) {
                countPar.textContent = '!Perdiste';
                countPar.setAttribute('id', `int${count}`);
                divResult.appendChild(countPar);
                guessd = true;
            }
        }
    }

}

userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') game();
});

buttonPlay.addEventListener('click', ()=> game());

buttonReset.addEventListener('click', ()=> resetGame());
