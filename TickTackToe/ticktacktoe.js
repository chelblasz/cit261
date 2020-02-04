// const board = document.querySelector('.board');
// const playerX = 'X';
// const playerO = 'O';
// let player = playerX;

// function startPlay(e) {
//     console.log(e.target);
//     e.target.innerHTML = player;
//     if (player === playerX) {
//         player = playerO;
//     }
//     else player = playerX;
// }

// board.addEventListener( 'click', function(e) {
//     console.log(e.target);
    
// });

const board = document.querySelector('board');
const playerX = 'X';
const playerO = 'O';

let currentTurn = 1;
let movesMade = 0;

board.on('click', function startPlay(e) {
    movesMade++;
    
    if (currentTurn === 1) {
        e.target.innerHTML = playerX;
        currentTurn++;
    } else {
        e.target.innerHTML = playerO;
        currentTurn--;
        console.log(e.target);
}

// board.addEventListener( 'click', function(e) {
//     console.log(e.target);
// }) 


});

// function Winner() {
//     if(movesMade > 4) {
//   
//     }
// }