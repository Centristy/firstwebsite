
const h1 = document.querySelectorAll('h1');



function randomRGB() {
    const r = Math.floor(Math.random()*100+150);
    const b = Math.floor(Math.random()*100+150);
    const g = Math.floor(Math.random()*256+150);
    return `rgb(${r},${b},${g})`
}

const letters = document.querySelectorAll('.letter');


setInterval(function(){
for (let letter of letters){
    letter.style.color = randomRGB();
}
},3000)