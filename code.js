let form = document.querySelector("form");
let btnAdd = document.querySelector("#addButton");
let newTaskInput = document.querySelector("#newTaskWritten");
let clear = document.querySelector("#clearAll");
let toDoList = document.querySelector("#addList");

let todoArray = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

localStorage.setItem("todos", JSON.stringify(todoArray));

let storage = JSON.parse(localStorage.getItem("todos"));

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  todoArray.push(newTaskInput.value);
  localStorage.setItem("todos", JSON.stringify(todoArray));
  toDoTaskMaker(newTaskInput.value);
  newTaskInput.value = "";
});

let toDoTaskMaker = function (text) {
  let toDo = document.createElement("li");
  toDo.textContent = text;
  toDoList.appendChild(toDo);
};

for (let i = 0; i < storage.length; i++) {
  toDoTaskMaker(storage[i]);
}

clear.addEventListener("click", function () {
  localStorage.clear();
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
});
