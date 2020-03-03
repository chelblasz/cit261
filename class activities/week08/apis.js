let data;
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

// previous.addEventListener("click", )

function pokiFetch(url) {
    return fetch(url)
        .then((response) => {
            return response.json();
        })

}

function pokiDisplay(listed) {
    const list = document.querySelector("ul");
    list.innerHTML = '';
    for (let i = 0; i < listed.length; i++) {
        list.innerHTML += `<li><a>${listed[i].name}</a></li>`;
    }
};

async function buildPage(url = 'https://pokeapi.co/api/v2/pokemon/') {
    const pokiDeck = await pokiFetch(url);
    pokiDisplay(pokiDeck.results)
    console.log(pokiDeck);
}

buildPage();

next.addEventListener("click", () => {buildPage(pokiFetch(pokiDeck.next))});

function showDetails() {
    const list = document.getElementById('list');
    const details = document.getElementById('details');
    list.classList.add("showDetails");
    details.classList.add("showDetails");
}

document.getElementById('list').addEventListener('click', showDetails);

