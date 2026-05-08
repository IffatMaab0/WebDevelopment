let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const genCompChoice = ()=>{
    const options =["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const gameDraw = () =>{
   console.log("Game was Draw");
   msg.innerText = "Game was Draw!"
   msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin)=>{
    if (userWin){
        console.log("you Won!")
        msg.innerText = "You Won!"
        msg.style.backgroundColor = "green"
    }else{
        console.log("You lose!")
        msg.innerText = "You lose!"
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) =>{
    console.log("you choose", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choose", compChoice);
    if (userChoice === compChoice){
        gameDraw();
    }else {
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice ==="paper" ? false : true;
        }else if(userChoice ==="paper"){
            userWin = compChoice ==="scissors" ? false : true; 
        }else{
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    }); 
});