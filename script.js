
const title = document.querySelector('#myTitle');
title.textContent = "Hello world!";

const btn = document.querySelector('#myBtn');

function showWarning() {
    console.warn("Кирило"); 
}

btn.onmousemove = showWarning;
