let computerNumber = 0;
let count = 0;

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
    console.log("primera llamada a la funcion : " + computerNumber);
    userInput.value = '';
    computerNumber = 0;
    console.log("se cambia el valor a cero : " + computerNumber);
    getNumber();
    console.log("el ultimo numero es : " + computerNumber);
    count = 0;
    divResult.childNodes.forEach(element => {
        console.log(element);
        divResult.removeChild(element);
    
    })
}

function game() {
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

            userInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') resetGame();
            });

            buttonPlay.addEventListener('click', ()=> {
                resetGame();
            });
            

        } else {
            countPar.textContent = `Intento : ${count}`;
            countPar.setAttribute('id', `int${count}`);
            divResult.appendChild(countPar);
            if (count === 3) {
                countPar.textContent = '!Perdiste';
                countPar.setAttribute('id', `int${count}`);
                divResult.appendChild(countPar);
                resetGame();
            }
        }
    }

}

userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') game();
});

buttonPlay.addEventListener('click', ()=> game());

buttonReset.addEventListener('click', ()=> resetGame());
