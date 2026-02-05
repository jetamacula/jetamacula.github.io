
function ndryshongjyren() {
document.getElementById("ngjyra").style.color = "blue";
console.log("ngjyra e titullit u be blu!");
}

function ndryshoBackground() { 
document.body.style.background = "lightgreen";
}

function pershendetje() {
 let emri = prompt("Si quhesh?") ;  
document.getElementById("mesazh").innerHTML = "pershendetje,"  + emri + "!";
}


function ndryshotitullin(){
document.getElementById("titulli").innerHTML ="Jeta eshte me e mira!";
console.log("Titulli eshte ndryshuuar");

}

function ndyshoFjalen(){
let tekst = document.getElementById("tekst").innerHTML;
let i = tekst.replace("i thjesht","argetues");
document.getElementById("tekst").innerHTML = i;
}

