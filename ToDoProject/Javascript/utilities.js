// import { ??? } from './buttons'

// HELP HERE NEEDED

export function querySelector(selectorName) {
    return document.querySelector(selectorName);
}

// non-default export
export function readFromLS(key) {
    return document.parse(localStorage.getItem(key));
}

export function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stingify(data));
}

export function bindTouch(selector, callback) {
    querySelector(selector).addEventListener('touchend', (e) => {
        e.preventDefault();
        callback();
    });

    document.querySelector(selector).addEventListener('click', (e) => {
        callback();
    });
}

// HELP HERE NEEDED

// clear, delete, edit button event listeners
// _____________________________________________________________________________________________________________________________
const clearButton = document.querySelector('clearCompleted');
const deleteButton = document.querySelector('clearCompleted');
const editButton = document.querySelector('clearCompleted');
const completedButton = document.querySelector('clearCompleted');

// OR____________________________________________________________
const clearButton = document.getElementById('clearCompleted');
const deleteButton = document.getElementById('deleteTask');
const editButton = document.getElementById('editTask');
const completedButton = document.getElementById('completedTask');

clearButton.addEventListener('click', (e) => {
    clearButton();
});
deleteButton.addEventListener('click', (e) => {
    // place function that will delete a single items.
    deleteButton();
});
editButton.addEventListener('click', (e) => {
    // place function that will edit single items. 
    editButton();
});
completedButton.addEventListener('click', (e)=> {
    // place function that will move a single item to the completed on list.
    completedButton();
});
