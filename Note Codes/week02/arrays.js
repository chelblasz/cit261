const carArray = ['VW', 'Corevette', 'Ferrari', 'Mustang'];

function cars() {
    if (document.getElementById('car1').clicked == true) {
        console.log(carArray[0]);
        // return carArray[0];
    } if (document.getElementById('car2').clicked == true) {
        return carArray[1];
    } if (document.getElementById('car3').clicked == true) {
        return carArray[2];
    } else {
        return carArray[3];
    }
}
