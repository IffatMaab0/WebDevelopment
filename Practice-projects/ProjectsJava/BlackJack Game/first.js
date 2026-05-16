let player ={
    name : "Maab",
    price: 150
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""

let rewardEl = document.getElementById("reward");
let sumEl = document.getElementById("sum-para");
let messageEl = document.getElementById("message-el");
let cardEl = document.querySelector("#card-para")

function getRandomNo(){
    let numb =  Math.floor(Math.random() * 13) + 1;
    if(numb === 1 ){
        return 11;
    }else if(numb > 10 ){
        return 10;
    }else{
        return numb;
    }
}

function startGame(){
    let isAlive = true
    let firstCard = getRandomNo();
    let secondCard =  getRandomNo();
    cards = [firstCard , secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame(){
    cardEl.textContent = "Cards: "
    for (let i=0; i< cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: "+ sum;
    if (sum <= 20){
        message = "Do you want to draw a new card? 🙂";
        isAlive = true;
    }else if(sum === 21){
        message = "Wohoo! you've got the Blackjack! 🙌";
        hasBlackJack = true;
        rewardEl.textContent = player.name + ": $" + player.price
    }else{
        message = "You're out of game 😭";
        isAlive = false;
    }
    messageEl.textContent = message;

}

function newCard(){
    num = getRandomNo();
    sum += num;
    cards.push(num);
    if(isAlive === true && hasBlackJack === false){
        renderGame()
    }
}
    
    

