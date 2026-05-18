let myLeads = [];
let oldLeads = [];

const inputEl = document.getElementById("input-el")
const saveInputBtn = document.getElementById("save-input");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-all")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}


function render(leads){
    let listItems = "";
    for(let i=0; i<leads.length ; i++){
// "<li><a href ='#'>" +myLeads[i] + "</a></li>"
        listItems += `
        <li>
        <a target='_blank' href =' ${leads[i]} '>
        ${leads[i]}
        </a>
        </li>`;
    }
    ulEl.innerHTML = listItems;
}

saveInputBtn.addEventListener("click", function (){
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})

