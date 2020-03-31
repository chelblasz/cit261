import {trapezius, booty, obliques, abs } from 'scripts/arrays.js'

document.querySelector('#bodyBack').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    listElements();
});

function listElements() {
    //change all array elements in to a list of strings? 
    arrays.toString()
}