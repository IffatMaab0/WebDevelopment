let countEl = document.getElementById("count");
let preVious = document.getElementById("previous")
console.log(countEl);
let count = 0;
function increment(){
    count +=1
    countEl.textContent = count
}
function save(){
    let saved = count + " - ";
    preVious.textContent +=  saved;
    console.log(saved);
    count =0;
    countEl.innerText = count;
}