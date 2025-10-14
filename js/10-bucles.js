/*
Bucles

Son estructurasde control que permiten un bloque de código 
varias veces, hasta que se cumpla una condicion especifica

Los más comunes en JS son for, while, y do...while

1.Bucle for

El bucle se utiliza cuando sabemos cuantas veces queremos
repetir un bloque de codigo. La sintaxis es:

for (inicialización; condición; incremento ) {
   // el codigo que se va a repetir su ejecucíon
   ...
}

Inicializacion 👉 variable con un valor inicial 
condición 👉 se evalua un expresión si es true se ejecuta el bucle 
incremento 👉 aumenta el valor de la variable en cada iteración 

*/

for (let i = 0; i < 10; i++) {
    console.log("Repetición" + i + ": Oye, Tlacua! 🐀")
}

/*

   2. Bucle While
    
   El bloque while se utiliza cuando no sabemos cuantas veces queremos
   repetir un bloque de código, pero si queremos que se repita mientras una condicion
   verdadera. sintaxys

   while () {
       //Codigo que se repite en ejecución
       incremento 
    }

    */

    let j = 0; //inicialización

    while (j < 5) {
        // codigo a ejecutar en bucle 
        console.log("Otro buclecito 😆");
        j++; //incrementar
    }

    /*

    3. Bucle do... while 

    Este bucle es similar al bucle while, pero garantiza que el bloque de código se 
    ejecuta al menos una vez. Ya que la condición se evalua después de la ejecucion

    do {
       // Código que se ejecuta al menos una vez 
       incremento
    } while (condición);

    */

    let k = 0;

    do {
      console.log("Twice Rules! 🔥")
      k++;
    } while (k < 5);

   
    

