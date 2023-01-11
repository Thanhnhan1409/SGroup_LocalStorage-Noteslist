function Delete_list(){
    document.getElementById('result-area').innerHTML = "";
    localStorage.setItem("tasks", '');
}

function Delete_input(){
    document.getElementById('input-content').value = "";
}

 let taskInput = document.getElementById("input-content");
 let taskList = document.getElementById("result-area");
 let addButton = document.getElementById("add-button");
 addButton.addEventListener("click", function() {
   let task = taskInput.value;
   let listItem = document.createElement("li");
   listItem.innerText = task;
   taskList.appendChild(listItem);
   taskInput.value = "";
   localStorage.setItem("tasks", taskList.innerHTML);
 });
 
 if (localStorage.getItem("tasks")) {
   taskList.innerHTML = localStorage.getItem("tasks");
 }