// default exports
import { bindTouch } from './utilities'

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

        this.listTodos();
    }

}

// HELP HERE NEEDED

// before I changed this it still did not work. I changed some things in my HTML so it is NOT WORKING!
function buildTodo(todo) {
    let li = document.createElement('li');
    li.classList.add('items');
    li.innerHTML = `<p>${todo.value}</p> <span><img id="deleteTask" class="decisionIcon"
    src="https://img.icons8.com/dotty/80/000000/delete.png">
    <img id="editTask" class="decisionIcon"
    src="https://img.icons8.com/carbon-copy/100/000000/edit--v1.png">
    <img id="completedTask" class="decisionIcon"
    src="https://img.icons8.com/carbon-copy/100/000000/checkmark.png">
</span>`
    return li;
}