let myLeads = [];


const inputEl = document.getElementById("input-el")
const saveInputBtn = document.getElementById("save-input");
const ulEl = document.getElementById("ul-el");


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderList();
}


saveInputBtn.addEventListener("click", function (){
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderList();

})

function renderList(){
    let listItems = "";
    for(let i=0; i<myLeads.length ; i++){
// "<li><a href ='#'>" +myLeads[i] + "</a></li>"
        listItems += `
        <li>
        <a target='_blank' href =' ${myLeads[i]} '>
        ${myLeads[i]}
        </a>
        </li>`;
    }
    ulEl.innerHTML = listItems;
}

