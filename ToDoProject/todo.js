// default exports
import { qs, qsa, bindTouch } from './utilities.js'

function saveTodo(toDo) {
console.log('saved', toDo)
}

export default class Todo {
    constructor() {
        bindTouch('newTodoButton', this.addNewTodo.bind(this));
    }
    listTodos() {}

    addNewTodo() {
        // get todo text
        const todoText = document.qs('newTodo');

        //save to data store
        saveTodo(todoText.value);

        // list todos
        this.listTodos();
    }

    removeTodo(id) {}

    completeTodo() {}

}