// default exports
import { bindTouch } from './utilities.js'

function saveTodo(toDo) {
console.log('saved', toDo)
}

export default class Todo {
    
    constructor() {
        bindTouch('#newTodoButton', this.addNewTodo.bind(this));
    }

    listTodos() {}

    addNewTodo() {
        // get todo text
        let li = document.createElement('li')
        const todoText = document.querySelector('#newTodo');
        console.log(li);
       
        // const inputValue = document.getElementById("myInput").value;

        //save to data store
        saveTodo(todoText.value);

        // list todos
        this.listTodos();
    }

    removeTodo(id) {}

    completeTodo() {}

}