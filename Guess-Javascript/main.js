let count = 0;
let numberComputer;

function Computer() {
    numberComputer = Math.floor(Math.random() * 10);
}

function playGame() {
    const userInput = parseInt(document.querySelector('#user').value);
    Computer();

    if (isNaN(userInput) || userInput < 1 || userInput > 10) {

        alert("!Error enter a valid data");
        
    }else {

        if (userInput == numberComputer) {
            document.querySelector('.review').innerHTML = '!Congratulations you guessed the number';
            document.querySelector('.count').innerHTML = `You got it right on try number : ${count}`;
            document.querySelector('.Computer').innerHTML = numberComputer;

        } else {
            count++;
            document.querySelector('.count').innerHTML = `Attempt number : ${count}`;
            document.querySelector('.review').innerHTML = `${userInput} is not the number try again`;
        }
        
    }
}

function resetGame() {
    count = 0;
    document.querySelector('.Computer').innerHTML = '?';
    document.querySelector('.review').innerHTML = '';
    document.querySelector('#user').value = '';
    document.querySelector('.count').innerHTML ='';
}
