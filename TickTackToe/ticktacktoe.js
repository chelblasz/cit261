const board = document.querySelector('.board');
const playerX = 'X';
const playerO = 'O';
let player = playerX;

function startPlay(e) {
    console.log(e.target);
    e.target.innerHTML = player;
    if (player === playerX) {
        player = playerO;
    }
    else player = playerX;
}

board.addEventListener( 'click', function(e) {
    console.log(e.target);
    
});

//     xos()};

// function xos() {
//   document.getElementById("box").innerHTML = "X";
// }

// function players() {
// for(i = 0; i < 10; i++){
//     if (i %2){
//         return xos;
//     } 
// }
// }