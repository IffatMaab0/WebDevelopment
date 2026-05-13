let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector(".msg-container")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

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

const showWinner = (userWin, userChoice, compChoice)=>{
    if (userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        compscore++
        compScorePara.innerText = compscore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`
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
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    }); 
});