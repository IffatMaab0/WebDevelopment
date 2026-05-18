let num = "32.5443"
const btn = document.getElementById("btn") ;
btn.textContent = num;
btn.addEventListener("click", function(){
    btn.textContent = `Buy $ ${Number(num).toFixed(2)}`
    console.log(btn.textContent)
})