let btn = document.getElementById("container");
let msg = document.getElementById('msg')
function buy(){
    msg.innerText = "ThankYou for purchase!"
    console.log("clickec")
}
btn.innerHTML = "<button onclick='buy()'>" + "BUY!" + "</button>";

