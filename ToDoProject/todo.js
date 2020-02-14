// default exports
import {
    bindTouch
} from './utilities.js'

let toDoList = [];

function saveTodo(toDoList) {
    console.log('saved', toDoList)

}

export default class Todo {

    constructor() {
        bindTouch('#newTodoButton', this.addNewTodo.bind(this));
    }

    listTodos() {
        let listItem = document.getElementById('List');
        toDoList.forEach(function(item){listItem.appendChild(buildTodo(item))})
        

    }

   

    addNewTodo() {
        let txtVal = document.getElementById('newTodo').value;
        const newTodo = {
            id: new Date(),
            value: txtVal,
            completed: false
        }

        toDoList.push(newTodo);

        //save to data store
        saveTodo(newTodo);

        // list todos
        this.listTodos();
    }

    removeTodo(id) {}

    completeTodo() {}

}
function buildTodo(todo) {
    let li = document.createElement('li');
    li.classList.add('items');
    li.innerHTML = `<p>${todo.value}</p> <span><img class="decisionIcon"
    src="https://img.icons8.com/dotty/80/000000/delete.png"><img class="decisionIcon"
    src="https://img.icons8.com/carbon-copy/100/000000/checkmark.png"></span>`
    return li;
}