// Creating the Document Object Models for count and save elements so that the contents can be changed
countEl = document.getElementById("count-el")
saveEl = document.getElementById("save-el")

//initializing count to 0
count = 0

//function to increment count by 1 ad change the text of count element 
function increment(){
    count = count + 1
    console.log(count)
    document.getElementById("count-el").textContent = count
}


//function to save the count state and resent count to 0
function save(){
    saveEl.textContent += (count + " - ")
    count = 0
    countEl.textContent = 0
}