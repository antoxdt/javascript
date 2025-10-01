/* 

Juego: Piedra papel o tijera
crear un juego interactivo donde el usuario puede jugar contra la computadora.

  Reglas:

- piedra vence a tijeras
- tijera vence a papel
- papel vence a piedra
- si ambos elijen lo mismo es empate.

  Pasos para implemetar:

- Definir las opciones del jugador
- Generar una opcion aleatoria para la computadora
- comparar estas opciones y determinar al ganador
- mostrar el resultado

  Estructuras a utilizar
  
- Variables
- Condicionales
- generacion de un número aleatorio (math ramdom)
- Operadores lógicos y de comparación
- Concatenacion de cadenas (strings)
- Plantillas literales (template strings)
- Comentarios

*/

console.log("estamos conectados")

// 1.- Variables - opciones del jugador
const opcionJugador = prompt("Para jugar escribe: Piedra ✊, Papel ✋ o Tijera ✌"); //piedra, papel o tijera.

//2.- opion de la computadora 
const numeroAleatorio = Math.random(); //genera un numero aleatrorio entre 0 - 1

let opcionComputadora;

//3.- condicional - Asignamos opción según el número aleatorio
if (numeroAleatorio < 0.33) {
    opcionComputadora = "Piedra ✊";
} else if (numeroAleatorio < 0.66) {
    opcionComputadora = "Papel ✋";
} else {
    opcionComputadora = "Tijera ✌"
}

console.log("✊piedra, ✋papel o ✌tijera");
console.log("tu eleccion es :" + opcionJugador);
console.log("la compu eligió: " + opcionComputadora);
console.log("_________________________");

// determinar el ganador a partir de condicionales

let resultado;

if (opcionJugador === opcionComputadora) {
    resultado = `¡EMPATE! ambos eligieron  ${opcionJugador}`;
} else if (opcionJugador === "Piedra ✊" && opcionComputadora === "Tijera ✌") {
    resultado = `¡GANASTE piedra vence a tijera!`;
} else if (opcionJugador === "Papel ✋" && opcionComputadora === "Piedra ✊") {
    resultado = `¡GANASTE papel vence a piedra!`;
} else if (opcionJugador === "Tijera ✌" && opcionComputadora === "Papel ✋") {
    resultado = `¡GANASTE tijera vence a papel!`;
} else {
    resultado = "Que lastima PERDISTE. La compu te ganó.";
}

//6. Mostramos el resultado
console.log(resultado);