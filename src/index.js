import './style.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";


let urlText = document.getElementById('urlText');
let fontSize = document.getElementById('fontSize');
let lineHeight = document.getElementById('lineHeight');
let fontColor = document.getElementById('fontColor');
let button = document.getElementById('button');
let pictureIMG = document.getElementById('picture');
let text = document.getElementById('text');
let div = document.getElementById('div');


urlText.addEventListener('keyup', () =>{
    pictureIMG.src = urlText.value;
})

fontSize.addEventListener('change', () =>{
    text.style.fontSize = fontSize.value + "px";
})

lineHeight.addEventListener('change', () =>{
    text.style.lineHeight = lineHeight.value + "em";
})

fontColor.addEventListener('change', () => {
    text.style.color = fontColor.value;
})

button.addEventListener('click', () => {
    div.classList.toggle('picture-active');
});

