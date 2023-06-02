let leads = []
const inputEl = document.getElementById("input")
let inputBtn = document.getElementById("save")
let deleteBtn = document.getElementById("delete")
let tabBtn = document.getElementById("savetab")


const list = document.getElementById("list")

const leadsStorage = JSON.parse(localStorage.getItem("leads"))

if(leadsStorage){
    leads = leadsStorage
    renderLine(leads)
}


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        leads.push(tabs[0].url)
        localStorage.setItem("leads",JSON.stringify(leads))
        renderLine(leads)
    })
    
})

function renderLine(lead){
    let content = ""
    for (let i = 0; i <lead.length; i++){
    content +="<li>" + '<a href="leads[i]" target=_black>' + lead[i] + "<a/>" +"</li>" 
    }
    list.innerHTML = content
} 

deleteBtn.addEventListener("click",function(){
    localStorage.clear()
    leads = []
    renderLine(leads)
})

inputBtn.addEventListener("click",function (){
    leads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("leads",JSON.stringify(leads))
    renderLine(leads)
    

})


