let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!
let rollButton = document.getElementById('roll');
let resultDiv = document.getElementById('result');


function rollDie(){
    return Math.floor(Math.random() * 6) + 1
}

function rollDice(){
    let firstDie = rollDie();
    let secondDie = rollDie();
    return firstDie + secondDie
}


rollButton.addEventListener('click', function(){
    let rollDiceTotal = rollDice();
    console.log(rollDiceTotal)
    results[rollDiceTotal] += 1;
    console.log(results);
    resultDiv.innerText = `You rolled a ${rollDiceTotal}!`
})