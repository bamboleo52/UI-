const body = document.querySelector("body");
const images = ["1.jpg","2.jpg"];

const randumIndex = Math.floor(Math.random()*images.length);

body.style.backgroundImage = `url(./img/${images[randumIndex]})`;
body.style.backgroundSize = "cover";