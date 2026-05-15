let firstCard = 5;
let secondCard =  9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""
if (sum <= 20){
    message = "Do you want to draw a new card? 🙂";
    isAlive = true;
}else if(sum === 21){
    message = "Wohoo! you've got the Blackjack! 🙌";
    hasBlackJack = true;
}else{
    message = "You're out of game 😭";
    isAlive = false;
}
console.log(message)

