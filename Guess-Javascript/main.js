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
const reveal = document.getElementById('divComputer');

const divAlert = document.createElement('div');
divAlert.id = 'Divalert';

const btnAlert = document.createElement('button');
btnAlert.textContent = 'OK';
btnAlert.id = 'alertButton';

const parrAlert = document.createElement('p');
parrAlert.textContent = 'Ingresa un valor correcto';

getNumber();

function resetGame() {
    userInput.value = '';
    computerNumber = 0;
    guessd = false;
    getNumber();
    count = 0;
    divResult.innerHTML = '';
    reveal.innerHTML = '?';
}

function shotsWin(num) {
    countPar.setAttribute('id', `win${num}`);
    divResult.appendChild(countPar);
    reveal.innerHTML = `<p>${computerNumber}</p>`;
}

function shotsLose(num) {
    countPar.setAttribute('id', `lose${num}`);
    divResult.appendChild(countPar);
}

function customAlert() {
    document.body.style.background = '#FFFFFF';//'rgba(0, 0, 0, 0.5)'; 
    document.body.appendChild(divAlert);
    divAlert.appendChild(parrAlert);
    divAlert.appendChild(btnAlert);
    
    userInput.disabled = true;

    btnAlert.addEventListener('click', ()=> {
        document.body.removeChild(divAlert);
        document.body.style.background = '#FFFFFF';
        userInput.disabled = false;
        userInput.focus();
    });
}

function game() {
    if (guessd) {
        resetGame();
        return;
    }
    const userNumber = userInput.value;
    console.log(computerNumber);
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10 || userNumber%1 !== 0) {
        customAlert();
        userInput.value = '';

    } else {
        count++;
        if (computerNumber == userNumber) {

            if (count === 1) {
                countPar.textContent = `Wow Adivinaste en el primer intento`;
                shotsWin(count);
            
            } else if (count === 2) {
                countPar.textContent = `Vaya! Adivinaste en el segundo intento`;
                shotsWin(count);
            
            } else {
                countPar.textContent = `Ufff! Adivinaste en el ultimo intento`;
                shotsWin(count);
            } 
            guessd = true;

        } else {

            if (count === 1) {
                countPar.textContent = `Primer intento`;
                shotsLose(count);
            
            } else if (count === 2) {
                countPar.textContent = 'Segundo intento';
                shotsLose(count);
            
            } else {
                countPar.textContent = '!Perdiste';
                shotsLose(count);
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
