document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName('game-button');

    for (let button of buttons){
        button.addEventListener("click", function(){
        let weaponClick = this.getAttribute('data-type'); 
        
        runGame(weaponClick);
    });
           

}})