
export function querySelector(selectorName) {
    return document.querySelector(selectorName);
}

// non-default export
export function readFromLS(key) {
    return document.parse(localStorage.getItem(key));
}

export function writeToLS(key, data) {
    localStorage.setItem(key,JSON.stingify(data));
}

export function bindTouch(selector, callback){
querySelector(selector).addEventListener('touchend', (e)=> {
e.preventDefault();
    callback();
});

document.querySelector(selector).addEventListener('click', (e)=> {
    callback();
    });
}

