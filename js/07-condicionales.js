/*

Condicionales

Son estructuras de control que permiten ejecutar diretentes bloques de codigo 
segun la condicion (verdadera o falsa)

1. Evalua una condicion y si es verdadera, ejecuta el bloque de codigo dentro de sus llaves

sintaxis:

if (condicion) {
   // bloque o codigo que se ejecutan
}

*/

let edad = 18;

if (edad >= 18) {
    alert("Eres mayor de edad, date! 😌")
}

/*
 
2. else

Permite ejecutar un bloque de codigo si la condicion es falsa

sintaxis: 

if (condicion) {
 // codigo que se ejecuta si la condicion es falsa.

}else {
    // código que se ejecuta si la condicion es falsa
}



*/

let hora = 10;

if (hora <12) {
    console.log(b"Buenos dias ☀")
} else {
    console.log("Buenas tardes chifurimpulo 🌞")
}

/*

3. else if

nos va a permitir tener más de una condicion a ser evaluada, esta 
evaluacion es en secuencia, si una condición es verdadera se ejecuta
su bloque de codigo

sintaxis:

if (condicion) {
// codigo que se ejecuta si es verdadera la condición
} else if (condicion2){
 // codigo que se ejecuta si la anterior es falsa y esa condicion es verdadera
} else {
    //codigo que se ejecuta si ninguna de las anteriores es verdadera.
}
*/

let calificacion = 10;

if (calificacion >= 9) {
    console.log("eres un excelente programador! 🌟")
} else if (calificacion >= 7) {
    console.log ("ahi la llevas ya casi te sale! 😎")
} else if (calificacion >= 5) {
    console.log ("echale más ganitas o nos veremos en el extra 😢")
    } else if {
     console.log ("Ya valio barriga, bienvenido al extra 🔥")
    }