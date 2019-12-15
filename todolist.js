const todoForm = document.querySelector(".js-toDoForm");
const todoInput = todoForm.querySelector("input");
const pendingList = document.querySelector(".js-pendingList");
const pending_LS = "PENDING";
let pending_s = [];

function saveToPending() {
    localStorage.setItem(pending_LS, JSON.stringify(pending_s));
  }

function deletePending(event) {
    console.log("delete이벤트실행");
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
  
    const cleanToDos = pending_s.filter(function(todo) {
      console.log(todo.id + " " + li.id);
      return todo.id != li.id;
    });
  
    pending_s = cleanToDos;
    saveToPending();
    console.log(pending_s);
  }
function addToPending(text) {
    const li = document.createElement("div");
    const delBtn = document.createElement("button");
    delBtn.innerText = "x";
    delBtn.addEventListener("click", deletePending);
    const span = document.createElement("span");
    const newId = pending_s.length + 1;
    span.innerText = text;
    console.log(span.innerText);
    li.appendChild(span);
    li.appendChild(delBtn);
    pendingList.appendChild(li);
    li.id = newId;
    const pendingObj = {
      id: newId,
      text: text
    };
    pending_s.push(pendingObj);
    saveToPending();
  }

function loadPending() {
    const pendingTodos = localStorage.getItem(pending_LS);
    if (pendingTodos !== null) {
      const parsedTodos = JSON.parse(pendingTodos);
      parsedTodos.forEach(function(todo) {
        addToPending(todo.text);
      });
    }
  }

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    console.log(currentValue);
    if (currentValue !== "") {
      addToPending(currentValue);
      todoInput.value = "";
    }
  }

function init() {
    loadPending();
    todoForm.addEventListener("submit", handleSubmit);
  }
  init();
  