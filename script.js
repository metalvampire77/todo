const text = document.getElementById("textBox")
const listItems = document.getElementById("listItems")

let addTask = () => {
    if(text.value != ''){
        const list = document.createElement("li")
        const remove = document.createElement("span")
        remove.innerHTML = "\u00d7"
        list.innerHTML = text.value
        listItems.appendChild(list)
        list.appendChild(remove)
        text.value = ''
        saveData()
    }
}

listItems.addEventListener("click",(e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)


function saveData(){
    localStorage.setItem("data",listItems.innerHTML)
}

function showTask(){
    listItems.innerHTML = localStorage.getItem("data")
}

showTask()