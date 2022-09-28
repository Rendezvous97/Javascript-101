countEl = document.getElementById("count-el")
saveEl = document.getElementById("save-el")
count = 0

function increment(){
    count = count + 1
    console.log(count)
    document.getElementById("count-el").textContent = count
}

function save(){
    saveEl.textContent += (count + " - ")
    count = 0
    countEl.textContent = 0
}