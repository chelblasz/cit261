// import {trapezius, booty, obliques, abs } from './exercises.js'

document.querySelector('#bodyBack').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    listElements(e.target.title);
});

function listElements() {
    let section = document.createElement('section');
    section.appendChild(h2);
    console.log(e.target);
}

// 