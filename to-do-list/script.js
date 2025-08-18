let task = document.getElementById("userInput");
let button = document.getElementById("addButton");
let list = document.getElementById("list");
button.addEventListener("click",function(){
    let input = task.value;
    let newList = document.createElement("li");
    newList.textContent = input;
    newList.classList.add("input")
    let completeButton = document.createElement("button");   
    completeButton.textContent="Complete";
    completeButton.classList.add("completeButton")
    let deleteButton = document.createElement("button");   
    deleteButton.textContent="Delete";
    deleteButton.classList.add("deleteButton")
    newList.append(completeButton);
    newList.append(deleteButton);
    list.append(newList)
    

    completeButton.addEventListener("click",function(){
        newList.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener("click",function () {
        newList.remove();
    })

    


})
