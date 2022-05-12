let piedraPapelTijera = ["piedra", "papel", "tijera"];
var turnoAlejandra = prompt("Piedra, papel o tijera, mi amor tu eliges");

turnoAlejandra = "papel";

function juego(turnoAlejandra){
    let indiceArreglo = Math.floor(Math.random()*piedraPapelTijera.length); //sacar el indice
    let maquina = piedraPapelTijera[indiceArreglo]; //sacar el valor
    console.log(maquina);
    let juego = maquina === turnoAlejandra ? "Ganaste mi amor" : "Perdiste mi amor";
    console.log(juego);
}
juego(turnoAlejandra);

