
let inputEl = document.getElementById("input-el");
let myLeads = JSON.parse(localStorage.getItem("Leads")) || []
let saveEl = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
const clearEl = document.getElementById("clear-btn");
const tabEl = document.getElementById("tab-btn");

tabEl.addEventListener("click",function(){
    chrome.tabs.query({active:true , currentWindow:true} , function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("Leads",JSON.stringify(myLeads))
        renderDetails();
    })
})
saveEl.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("Leads" ,JSON.stringify(myLeads))
    renderDetails();
}) 
function renderDetails(){
    inputEl.value = "";
    ulEl.innerHTML = "";
    for(let i of myLeads){
        ulEl.innerHTML += `
        <li>
        <a target="blank" href="${i}">
        ${i}
        </a>
        </li>
        `
}
}
renderDetails();
clearEl.addEventListener('click' , function(){
    console.log("clicked");
    localStorage.clear();
    myLeads = [] 
    renderDetails();
})



