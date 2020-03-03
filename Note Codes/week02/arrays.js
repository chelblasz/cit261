const carArray = ['VW', 'Corevette', 'Ferrari', 'Mustang'];

function cars(e) {
    const car = e.target;
    switch (car.id) {
        case "car1": setImage ('/beetle.jpg');
            break;
        case "car2": setImage ('/corvette.jpg')
            break;
        case "car3": setImage ('/ferrari.jpg')
            break;
        case "car4": setImage ('/mustang.jpg')
            break;
            default: "not working"
    }   
}

function setImage(imageSrc) {
    const newImage = document.createElement('img');

    newImage.src=imageSrc;

    document.querySelector('.images').innerHTML= newImage;

    // append child may work better
}

document.getElementById('buttons').addEventListener('click', cars);


// if ( == "car1") {

//     if (document.getElementById('car1').clicked == true) {
//         console.log(carArray[0]);
//         // return carArray[0];
//     }
//     if (document.getElementById('car2').clicked == true) {
//         return carArray[1];
//     }
//     if (document.getElementById('car3').clicked == true) {
//         return carArray[2];
//     } else {
//         return carArray[3];
//     }
// }