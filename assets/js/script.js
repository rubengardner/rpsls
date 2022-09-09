//Global variable that fixes the rapid-fire bug
let clicked;

/* Waits for the DOM to finish loading before running the code
* Gets the game button elements and adds event listeners to them
*/
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName('game-button');
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (clicked) return;
            clicked = true;
            let weaponClick = this.getAttribute('data-type'); 
            runGame(weaponClick);
        });           
    }
});

//Runs the round calling all the different functions
function runGame(weaponElection){
    let enemyElection=enemyWeapon();
      
    battle(weaponElection, enemyElection);
    displayUserWeapon(weaponElection);
    displayEnemyWeapon(enemyElection);

//Prevents rapid fire with the game buttons    
    setTimeout(function() {
        clicked = false;
    }, 1000);
}

//Chooses randomly the weapon for the enemy
function enemyWeapon(){
    const weapons=['rock', 'paper', 'scissor', 'lizard', 'spock'];
    const weaponChoice = weapons[Math.floor(Math.random()*weapons.length)];
 
    return weaponChoice;   
}

//Returns winner of between user and enemy
function battle(weapon1, weapon2){
    let resultText =  document.getElementById('result');
    //Eliminates classes that added round-winner animations
    document.getElementById('enemy').classList.remove("animation-looser");
    document.getElementById('user-area').classList.remove("animation-looser");

    //Draw
    if(weapon1 === weapon2){
        resultText.innerText = "Play again!";
       document.getElementById('result-text').innerText = 'DRAW';
    }
    //Weapon selection: ROCK
    else if(weapon1 === 'rock' && weapon2 === 'paper'){
       enemyWin(); 
       resultText.innerText = 'Paper covers Rock';
    }
    else if(weapon1 === 'rock' && weapon2 === 'scissor'){
        userWin();
        resultText.innerText = 'Rock crushes Scissors';
    }
    else if(weapon1 === 'rock' && weapon2 === 'lizard'){
        userWin();
        resultText.innerText = 'Rock crushes Lizard';
    }
    else if(weapon1 === 'rock' && weapon2 === 'spock'){
        enemyWin();
        resultText.innerText = 'Spock vaporizes Rock';
    }
    //weapon selection: PAPER
    else if(weapon1 === 'paper' && weapon2 === 'rock'){
        userWin();
        resultText.innerText = 'Paper covers Rock';
    }
    else if(weapon1 === 'paper' && weapon2 === 'scissor'){
        enemyWin();
        resultText.innerText = 'Scissors cuts Paper';
    }
    else if(weapon1 === 'paper' && weapon2 === 'lizard'){
        enemyWin();
        resultText.innerText = 'Lizard eats Paper';
    }
    else if(weapon1 === 'paper' && weapon2 === 'spock'){
        userWin();
        resultText.innerText = 'Paper disproves Spock';
    }
    // Weapon selection: SCISSOR
    else if(weapon1 === 'scissor' && weapon2 === 'rock'){
        enemyWin();
        resultText.innerText= 'Rock crushes Scissors';
    }
    else if(weapon1 === 'scissor' && weapon2 === 'paper'){
        userWin();
        resultText.innerText = 'Scissors cuts Paper';
    }
    else if(weapon1 === 'scissor' && weapon2 === 'lizard'){
        userWin();
        resultText.innerText = 'Scissors decapitates Lizard';
    }
    else if(weapon1 === 'scissor' && weapon2 === 'spock'){
        enemyWin();
        resultText.innerText = 'Spock smashes Scissors';
    }
    // Weapon selection: LIZARD
    else if(weapon1 === 'lizard' && weapon2 === 'rock'){
        enemyWin();
        resultText.innerText = 'Rock crushes Lizard';
    }
    else if(weapon1 === 'lizard' && weapon2 === 'paper'){
        userWin();
        resultText.innerText = 'Lizard eats Paper';
    }
    else if(weapon1 === 'lizard' && weapon2 === 'scissor'){
        enemyWin();
        resultText.innerText = 'Scissors decapitates Lizard';
    }
    else if(weapon1 === 'lizard' && weapon2 === 'spock'){
        userWin();
        resultText.innerText = 'Lizard poisons Spock';
    }
    //Weapon selection: SPOCK
    else if(weapon1 === 'spock' && weapon2 === 'rock'){
        userWin();
        resultText.innerText = 'Spock vaporizes Rock';
    }
    else if(weapon1 === 'spock' && weapon2 === 'paper'){
        enemyWin();
        resultText.innerText = 'Paper disproves Spock';
    }
    else if(weapon1 === 'spock' && weapon2 === 'scissor'){
        userWin();
        resultText.innerText = 'Spock smashes Scissors';
    }
    else if(weapon1 === 'spock' && weapon2 === 'lizard'){
        enemyWin();
        resultText.innerText = 'Lizard poisons Spock';
    }
    else{
        alert('Unknow variable');
    }
}

//Determines if the user won the round or the battle
function userWin(){
    //Calls function that reduces health
    let health = document.getElementById("enemy-health");

    looseHealth(health);
    //Displays final round pop-up: user won.
    if (health.value <= 10){
        let victoryPopup = document.getElementById("game-result");
        let message = document.getElementById("result-message");
        
        victoryPopup.classList.add('visibility-transition');
        message.classList.add('user-winner');
        victoryPopup.style.visibility = 'visible';
        message.innerText = "You won!";
    }else{
    //Code runs if there is a round-victory for the user
    document.getElementById('result-text').innerText = 'VICTORY';
    setTimeout(() => document.getElementById('enemy').classList.add("animation-looser"));
    }
}

//Determines if the enemy won the round or the battle
function enemyWin(){
    //Calls function that reduces health
    let health = document.getElementById("user-health");
    looseHealth(health);

    //Display final round pop-up: user won.
    if (health.value <= 10){
        let defeatPopup =  document.getElementById("game-result");
        let message= document.getElementById("result-message");
       
        
        defeatPopup.style.visibility='visible';
        defeatPopup.classList.add('visibility-transition');
        message.classList.add('enemy-winner');
        message.innerText = "Sorry, you lost!";
    }else{ 
        //Code runs if there is a round-victory for the user      
        document.getElementById('result-text').innerText = 'DEFEAT';
        setTimeout(() => document.getElementById('user-area').classList.add("animation-looser"));
        }
}    

//Displays user weapons in game section
function displayUserWeapon(weapon){
    if (weapon === "rock") {
        document.getElementById('user-display').innerHTML = `<i class="fa fa-hand-rock-o" aria-hidden="true"></i>`;
    } else if (weapon === "paper") {
        document.getElementById('user-display').innerHTML = `<i  class="fa fa-hand-paper-o" aria-hidden="true"></i>`;
    } else if (weapon === "scissor") {
        document.getElementById('user-display').innerHTML = `<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>`;
    } else if (weapon === "lizard") {
        document.getElementById('user-display').innerHTML = `<i class="fa fa-hand-lizard-o" aria-hidden="true"></i> `;
    } else if (weapon === "spock") {
        document.getElementById('user-display').innerHTML = `<i class="fa fa-hand-spock-o" aria-hidden="true"></i>`;
    } else {
        alert('Unknown weapon1');
    }
}

//Displays enemy weapons in game section
function displayEnemyWeapon(weapon){
    if (weapon === "rock") {
        document.getElementById('enemy-display').innerHTML = `<i class="fa fa-hand-rock-o" aria-hidden="true"></i>`;
    } else if (weapon === "paper") {
        document.getElementById('enemy-display').innerHTML = `<i  class="fa fa-hand-paper-o" aria-hidden="true"></i>`;
    } else if (weapon === "scissor") {
        document.getElementById('enemy-display').innerHTML = `<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>`;
    } else if (weapon === "lizard") {
        document.getElementById('enemy-display').innerHTML = `<i class="fa fa-hand-lizard-o" aria-hidden="true"></i>`;
    } else if (weapon === "spock") {
        document.getElementById('enemy-display').innerHTML = `<i class="fa fa-hand-spock-o" aria-hidden="true"></i>`;
    } else {
        alert('Unknown weapon2');
    }
}

//Opens pop-up with image explaining game mechanincs
function openPopup() {   
    document.getElementById("game-rules").style.visibility = "visible";
}

//Closes pop-up with image explaining game mechanincs
function closePopup() {   
    document.getElementById("game-rules").style.visibility = "hidden";
}

// Resets the game section to it's initial state
function playAgain(){
    //Resets initial 'i' tag for weapon selection and initial message
    let weaponEnemy = document.getElementById('enemy-display');
    let weaponUser = document.getElementById('user-display');
    let resultPopup = document.getElementById("game-result");
    let messageResult = document.getElementById('result-message');

    //Resets weapons selection & initial game text
    weaponEnemy.innerHTML = `<i class="fa fa-ellipsis-h" aria-hidden="true"></i>`;
    weaponUser.innerHTML=  `<i class="fa fa-ellipsis-h" aria-hidden="true"></i>`;
    document.getElementById('result').innerText = "Waiting for you're move";
    document.getElementById('result-text').innerText = '...';

    //Resets health bars
    document.getElementById("enemy-health").value = 50;
    document.getElementById("user-health").value = 50;

    //Resets final round pop-up 
    resultPopup.style.visibility = "hidden";
    messageResult.classList.remove('user-winner');
    messageResult.classList.remove('enemy-winner');
    resultPopup.classList.remove('visibility-transition');
}

/*Health substraction:
Every time either the user or the enemy lose a round, they lose 10 health points. This function substracts
a single point every 80 ms, taking a total of 800 ms per round lost.
*/
function looseHealth(healthBarId){   
    let x = 0;
    let intervalID = setInterval(function (){
        healthBarId.value  -= 1; 
        if (++x === 10) {
            window.clearInterval(intervalID);
        }
    }, 80);
}

