export function qs(query) {
    return document.querySelector(query);
}

// non-default export
export function qsa(query) {
    return document.querySelectorAll(query);
}

export function bindTouch(selector, callback){
qs(selector).addEventListener('touchend', (e)=> {
e.preventDefault();
    callback();
});

qsa(selector).addEventListener('click', (e)=> {
    callback();
    });
}

