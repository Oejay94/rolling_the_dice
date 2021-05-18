let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!

//get's the id of the elements located in the HTML
//This will allow us to make certain changes to the elements or the page as a whole if need be.
let rollButton = document.getElementById('roll');
let resultDiv = document.getElementById('result');

//Returns a random number between 1 and 6 which represents 1 'roll' of a single die
function rollDie(){
    return Math.floor(Math.random() * 6) + 1
}

//Uses the function above to get two random numbers between 1 and 6
//The function then adds those two random numbers together
function rollDice(){
    let firstDie = rollDie();
    let secondDie = rollDie();
    return firstDie + secondDie
}

//Uses the rollTwoDice to get a number between 2 and 12.
//Adds the number returned from the function to the results array.
//Displays what number was rolled onto the screen
//These functions and events are executed whenever the rollButton is clicked on the page.
rollButton.addEventListener('click', function(){
    let rollDiceTotal = rollDice();
    console.log(rollDiceTotal)
    results[rollDiceTotal] += 1;
    console.log(results);
    resultDiv.innerText = `You rolled a ${rollDiceTotal}!`
})