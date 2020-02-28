let pokiDeck;

// previous.addEventListener("click", )

function pokiFetch(url) {
    return fetch(url)
        .then((response) => {
            return response.json();
        })

}

async function pokiDisplay(listed) {
    const list = document.querySelector("ul");
    list.innerHTML = '';
    for (let i = 0; i < listed.length; i++) {
        let details = listed[i].url;
        let detailsJson = await pokiFetch(details)
        let sprite = detailsJson.sprites.front_default;
        list.innerHTML += `<li><img src="${sprite}"><a>${listed[i].name}</a></li>`;
    }
};

async function buildPage(url = 'https://pokeapi.co/api/v2/pokemon/') {
    pokiDeck = await pokiFetch(url);
    console.log(pokiDeck.results)
    pokiDisplay(pokiDeck.results)
    console.log(pokiDeck);
}


buildPage();

let previous20 = document.querySelector(".previous20");

previous20.addEventListener("click", () => {
    if (!pokiDeck.previous) {
        return;
    }
    buildPage(pokiDeck.previous);
})

let next20 = document.querySelector(".next20");

next20.addEventListener("click", () => {
    if (!pokiDeck.next) {
        return;
    }
    buildPage(pokiDeck.next);
});




