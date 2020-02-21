function getJson(url) {
    return fetch('food.json').then((response) => {
    Console.log(response);   
        If(response.ok) {
    return response.json();
    }
    //  else {
    //     throw new error()
    // }
    // return response.json();
    }).then((data) => {
    Console.log(data)
    }).catch((err) => {
    Console.log(err);
    });
    }
    
    getJson('food.json').then((data) => {
    console.log(data);
    });

    function longPromise() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true) {        
        resolve(42);
    } else {
        reject("it didn't work");
    }
    }, 200);
    
});       
    }

    longPromise().then((response) => {
        const total = 100 + response;
        console.log("total", total);
    }, (err) => {
        console.log(err);
    });

    const baseUrl = 'https://pokeapi.co/api/v2/';

    getJson(baseUrl+'pokemon').then((data) => {
        buildList(data.results);
    });

    function buildList(pokemon) {
        const element = document.getElementById('listElement');
        element.innerHTML = pokemon.map((item) => {
            return `<li><a href="${item.url}">${item.name}</a></li>`;
        }).join("");
    }
    
