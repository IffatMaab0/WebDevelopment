let countEl = document.getElementById("count");
console.log(countEl);
let count = 0;
function increment(){
    count +=1
    countEl.innerText = count
    console.log(count)
}
