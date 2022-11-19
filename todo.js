'use strict';

const addMessage = document.querySelector('.message');
const buttonAdd = document.querySelector('.add')
const todoList = document.querySelector('.todo')

let todoListArray = [];
if (localStorage.getItem('todo')){
    todoListArray = JSON.parse(localStorage.getItem('todo'))
    displayMessages();
}
buttonAdd.addEventListener('click', ()=>{
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };
    todoListArray.push(newTodo)
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoListArray))
    addMessage.value = '';
})

function displayMessages(){
    let displayMessage = '';
    if (todoListArray.length === 0) todoList.innerHTML = '';
    todoListArray.forEach((item, index)=>{
        displayMessage += `
        <li>
            <input type="checkbox" name="" id="item_${index}" ${item.checked ? 'checked': ''}>
            <label for="item_${index}" class="${item.important ? 'important': ''}">${item.todo}</label>
            <button class="del">Удалить</button>
        </li>
        `;
        todoList.innerHTML = displayMessage;
    })
}
const buttonDelete = document.querySelector('.del');
todoList.addEventListener('change', (event)=>{
    let idInput = event.target.getAttribute('id');
    let valueLAbel = todoList.querySelector('[for='+ idInput+']').innerHTML
    todoListArray.forEach((item)=>{
        if (item.todo === valueLAbel){
            item.checked = !item.checked
            localStorage.setItem('todo', JSON.stringify(todoListArray))
        }
    })
})

todoList.addEventListener('contextmenu', (event)=>{
    event.preventDefault();
    todoListArray.forEach((item)=>{
        if (item.todo === event.target.innerHTML){
            item.important = !item.important;
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoListArray))
        }
    })
})
todoList.addEventListener('click',(event)=>{
    if (event.target.tagName !== 'BUTTON'){
        return
    }
    let li = event.target.closest('li')
    li.remove();

})

















