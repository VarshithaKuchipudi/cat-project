let bulbImgEl = document.getElementById("bulbImage");
let catImgEl = document.getElementById("catImage");
let switchEl = document.getElementById("switchHead");
let buttonEl = document.getElementById("offButton");
let onButtonEl = document.getElementById("onButton");

function offBtn() {
    bulbImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchEl.textContent = "SwitchOff";
    switchEl.style.color = "red";
    buttonEl.style.backgroundColor = "grey";
    onButtonEl.style.backgroundColor = "green";
}

function onBtn() {
    bulbImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchEl.textContent = "SwitchOn";
    switchEl.style.color = "green";
    buttonEl.style.backgroundColor = "red";
    onButtonEl.style.backgroundColor = "grey";
}
