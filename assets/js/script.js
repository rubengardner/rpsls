let clicked;

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

function runGame(weaponElection){
    let enemyElection=enemyWeapon();
      
    battle(weaponElection, enemyElection);
    displayUserWeapon(weaponElection);
    displayEnemyWeapon(enemyElection);
    setTimeout(function() {
        clicked = false;
    }, 1000);
}


function enemyWeapon(){
    weapons=['rock', 'paper', 'scissor', 'lizard', 'spock'];
    weaponChoice = weapons[Math.floor(Math.random()*weapons.length)];
 
    return weaponChoice;
    
}


//Returns winner of between user and enemy
function battle(weapon1, weapon2){
    //Eliminates classes that added round-winner animations
    document.getElementById('enemy').classList.remove("animation-looser");
    document.getElementById('user-area').classList.remove("animation-looser");

    //Draw
    if(weapon1 === weapon2){
       document.getElementById('result').innerText="Play again!";
       document.getElementById('result-text').innerText='DRAW';

    }
    //Weapon selection: ROCK
    else if(weapon1 === 'rock' && weapon2 === 'paper'){
       enemyWin(); 
       document.getElementById('result').innerText='Paper covers Rock';
    }
    else if(weapon1 === 'rock' && weapon2 === 'scissor'){
        userWin();
        document.getElementById('result').innerText= 'Rock crushes Scissors';
    }
    else if(weapon1 === 'rock' && weapon2 === 'lizard'){
        userWin();
        document.getElementById('result').innerText= 'Rock crushes Lizard';
    }
    else if(weapon1 === 'rock' && weapon2 === 'spock'){
        enemyWin();
        document.getElementById('result').innerText='Spock vaporizes Rock';
    }
    //weapon selection: PAPER
    else if(weapon1 === 'paper' && weapon2 === 'rock'){
        userWin();
        document.getElementById('result').innerText= 'Paper covers Rock';
    }
    else if(weapon1 === 'paper' && weapon2 === 'scissor'){
        enemyWin();
        document.getElementById('result').innerText='Scissors cuts Paper';
    }
    else if(weapon1 === 'paper' && weapon2 === 'lizard'){
        enemyWin();
        document.getElementById('result').innerText= 'Lizard eats Paper';
    }
    else if(weapon1 === 'paper' && weapon2 === 'spock'){
        userWin();
        document.getElementById('result').innerText= 'Paper disproves Spock';
    }
    // Weapon selection: SCISSOR
    else if(weapon1 === 'scissor' && weapon2 === 'rock'){
        enemyWin();
        document.getElementById('result').innerText= 'Rock crushes Scissors';
    }
    else if(weapon1 === 'scissor' && weapon2 === 'paper'){
        userWin();
        document.getElementById('result').innerText= 'Scissors cuts Paper';
    }
    else if(weapon1 === 'scissor' && weapon2 === 'lizard'){
        userWin();
        document.getElementById('result').innerText= 'Scissors decapitates Lizard';
    }
    else if(weapon1 === 'scissor' && weapon2 === 'spock'){
        enemyWin();
        document.getElementById('result').innerText= 'Spock smashes Scissors';
    }
    // Weapon selection: LIZARD
    else if(weapon1 === 'lizard' && weapon2 === 'rock'){
        enemyWin();
        document.getElementById('result').innerText='Rock crushes Lizard';
    }
    else if(weapon1 === 'lizard' && weapon2 === 'paper'){
        userWin();
        document.getElementById('result').innerText= 'Lizard eats Paper';
    }
    else if(weapon1 === 'lizard' && weapon2 === 'scissor'){
        enemyWin();
        document.getElementById('result').innerText= 'Scissors decapitates Lizard';
    }
    else if(weapon1 === 'lizard' && weapon2 === 'spock'){
        userWin();
        document.getElementById('result').innerText= 'Lizard poisons Spock';
    }
    //Weapon selection: SPOCK
    else if(weapon1 === 'spock' && weapon2 === 'rock'){
        userWin();
        document.getElementById('result').innerText= 'Spock vaporizes Rock';
    }
    else if(weapon1 === 'spock' && weapon2 === 'paper'){
        enemyWin();
        document.getElementById('result').innerText= 'Paper disproves Spock';
    }
    else if(weapon1 === 'spock' && weapon2 === 'scissor'){
        userWin();
        document.getElementById('result').innerText='Spock smashes Scissors';
    }
    else if(weapon1 === 'spock' && weapon2 === 'lizard'){
        enemyWin();
        document.getElementById('result').innerText= 'Lizard poisons Spock';
    }
    else{
        alert('Unknow variable')
    }
}

//Determines if the user won the round or the battle
function userWin(){
    //Calls function that reduces health
    let health = document.getElementById("enemy-health")
    looseHealth(health);
    
    //Display final round pop-up: user won.
    if (health.value <= 10){
        let victoryPopup= document.getElementById("game-result");
        let message= document.getElementById("result-message");
        
        victoryPopup.classList.add('visibility-transition')
        victoryPopup.style.visibility='visible';
        message.innerText="You won!";
        document.getElementById('result-message').classList.add('user-winner');
        
     //Code runs if there is a round-victory for the user
    }else{
    
    document.getElementById('result-text').innerText = 'VICTORY';
    setTimeout(() => document.getElementById('enemy').classList.add("animation-looser"))
    
    
   
    }}
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
        message.innerText="Sorry, you lost!";
        document.getElementById('result-message').classList.add('enemy-winner');
        
      //Code runs if there is a round-victory for the user   
    }else{    
        document.getElementById('result-text').innerText = 'DEFEAT';
        setTimeout(() => document.getElementById('user-area').classList.add("animation-looser"))
         }}    

function displayUserWeapon(weapon){
    if (weapon === "rock") {
        document.getElementById('user-display').innerHTML=`<i class="fa fa-hand-rock-o"></i>`
    } else if (weapon === "paper") {
        document.getElementById('user-display').innerHTML=`<i  class="fa fa-hand-paper-o" aria-hidden="true"></i>`
    } else if (weapon === "scissor") {
        document.getElementById('user-display').innerHTML=`<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>`
    } else if (weapon === "lizard") {
        document.getElementById('user-display').innerHTML=`<i class="fa fa-hand-lizard-o" aria-hidden="true"></i> `
    } else if (weapon === "spock") {
        document.getElementById('user-display').innerHTML=`<i class="fa fa-hand-spock-o" aria-hidden="true"></i>`
    } else {
        alert('Unknown weapon1');
}}

function displayEnemyWeapon(weapon){
    if (weapon === "rock") {
        document.getElementById('enemy-display').innerHTML=`<i class="fa fa-hand-rock-o"></i>`
    } else if (weapon === "paper") {
        document.getElementById('enemy-display').innerHTML=`<i  class="fa fa-hand-paper-o" aria-hidden="true"></i>`
    } else if (weapon === "scissor") {
        document.getElementById('enemy-display').innerHTML=`<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>`
    } else if (weapon === "lizard") {
        document.getElementById('enemy-display').innerHTML=`<i class="fa fa-hand-lizard-o" aria-hidden="true"></i> `
    } else if (weapon === "spock") {
        document.getElementById('enemy-display').innerHTML=`<i class="fa fa-hand-spock-o" aria-hidden="true"></i>`
    } else {
        alert('Unknown weapon2');
}}

function openPopup() {   
    document.getElementById("game-rules").style.visibility = "visible";
 }

function closePopup() {   
 document.getElementById("game-rules").style.visibility = "hidden";
}


function playAgain(){
    //Resets health bars
    document.getElementById("enemy-health").value =50;
    document.getElementById("user-health").value=50;

    //Resets initial 'i' tag for weapon selection and initial message
    let weaponEnemy=  document.getElementById('enemy-display');
    let weaponUser=  document.getElementById('user-display');
    weaponEnemy.innerHTML=`<i class="fa fa-ellipsis-h" aria-hidden="true"></i>`;
    weaponUser.innerHTML=`<i class="fa fa-ellipsis-h" aria-hidden="true"></i>`;
    document.getElementById('result').innerText = "Waiting for you're move";
    document.getElementById('result-text').innerText = '...';

    //Resets final round pop up 
    document.getElementById("game-result").style.visibility = "hidden";
    document.getElementById('result-message').classList.remove('user-winner');
    document.getElementById('result-message').classList.remove('enemy-winner');
    document.getElementById("game-result").classList.remove('visibility-transition')

}
//Code from: https://stackoverflow.com/questions/2956966/javascript-telling-setinterval-to-only-fire-x-amount-of-times
function looseHealth(healthBarId){   
    let x = 0;
    let intervalID = setInterval(function (){healthBarId.value  -= 1; if (++x === 10) {
            window.clearInterval(intervalID);}}, 80);
}

