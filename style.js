
const h1 = document.querySelectorAll('h1');



function randomRGB() {
    const r = Math.floor(Math.random()*150+100);
    const b = Math.floor(Math.random()*150+100);
    const g = Math.floor(Math.random()*150+100);
    return `rgb(${r},${b},${g})`
}




function returnletter(a){

let whatletter = document.querySelector('input').value

return whatletter.charAt(a);

}

function stopcolor(){
    document.querySelector(".letter").className = "paused";
    

}


function gocolor(){
    document.querySelector(".paused").className = "letter";
    

}
function findletter(a){
let inputLetter = document.querySelector('input')

return inputLetter.charAt(a);

}

setInterval(function (){

    const letters = document.querySelectorAll('.letter');
    for (let letter of letters){
    letter.style.color = randomRGB();
}
},1000)

