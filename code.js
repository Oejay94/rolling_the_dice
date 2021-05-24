let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(results);

// Your Code Here!

//get's the id of the elements needed for the Assessment.
let rollButton = document.getElementById('roll');
let resultDiv = document.getElementById('result');
let graphDiv = document.getElementById('graph');
let manyRollButton = document.getElementById('manyRoll');
let resetButton = document.getElementById('resetButton')

//Returns a random number between 1 and 6 which represents 1 'roll' of a single die
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//Uses the function above to get two random numbers between 1 and 6
//The function then adds those two random numbers together
function rollTwoDice() {
    let dieOne = rollDie();
    let dieTwo = rollDie();
    return dieOne + dieTwo;
}

//loops through the results array and displays how many times a certain number was rolled
function renderGraph() {
    let newDiv = ''
    for (i = 2; i < results.length; i++) {
        newDiv += `<div>You've rolled ${i} : ${results[i]} times</div>`
    }
    graphDiv.innerHTML = newDiv;
}

//Uses the rollTwoDice to get a number between 2 and 12.
//Adds the number returned from the function to the results array.
//Displays what number was rolled onto the screen
//Uses the renderGraph function
function rollTheDice () {
    let rollTwoDiceTotal = rollTwoDice();
    results[rollTwoDiceTotal] += 1;
    console.log(results);
    resultDiv.innerText = `You rolled a ${rollTwoDiceTotal}!`;
    renderGraph()
}

//Uses the rollTwoDice function and returns 1,000 number between 2 and 12.
//Adds the those numbers to the results array
//Uses the renderGraph function to display how many times a certain number was rolled
function rollAllTheDice() {
    for (let index = 1; index <= 1000; index = index + 1) {
        let rollTwoDiceTotal = rollTwoDice();
        results[rollTwoDiceTotal] += 1;
        console.log(results)
        renderGraph()
    }
}

//A reset function I created to make the page blank and reset the array to it's original value
function clearThePage(){
    results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log(results)
    resultDiv.innerHTML = '';
    graphDiv.innerHTML = '';
}

//Event Listeners that uses the functions above whenever a button is clicked.
resetButton.addEventListener('click', clearThePage)
rollButton.addEventListener('click',rollTheDice)
manyRollButton.addEventListener('click', rollAllTheDice)