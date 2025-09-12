/* 

Tipos de datos

los tipos de datos son una clasificacion de los diferentes valores que podemos manejar en un lenguaje de programación

En JS, exisen varios tipos que se pueden agrupar en dos categorias principales: primitivos y complejos u objetos.

cada tipo de dato tiene sus propias caracteristicas y usos especificos en la programacion

1. Primitivos

datos básicos: que no se consideran "objetos" o no tienen "metodos".

    number o número

        representan valores numericos ya sea enteros o decimales (punto flotante)

    strings o cadenas de caracteres

        Representan texto. El texto se coloca entre comillas dobles o simples: "texto" 'texto'. Se valen las dos, pero hay que ser constantes.

    boolean o boleanos
        
        Representan un valor lógico que puede ser "true" o "false".

    undefined indefinido

        Es el valor que se asigna a una variable que ha sido declarada pero no inicializada.

    null o nulo

        representa la ausencia intencional de cualquier valor u objeto. Es un tipo de dato que indica que una variable no tiene ningun valor asignado.

    
*/

    /* number */

let miNumero = (6);
let miNumeroDecimal = (0.16);

console.log(miNumero);
console.log(miNumeroDecimal);



    /* strings */

let miNombre = "Antonio";
let miApellido = "Romero";

console.log(miNombre);
console.log(miApellido);



    /* boolean */

let esEstudinte = true;
let tieneTrabajo = false;

console.log(esEstudinte);
console.log(tieneTrabajo);



    /* Underfined */

let aprobareDesarolloDeApps; // Inicializar una variable, pero no se define su valor

console.log(aprobareDesarolloDeApps);



    /* null */

let meQuiere = null;

console.log(meQuiere);


/*

2. complejos o de objeto

    array o Arreglos

        Es un conjunto de datos que se almacenan en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados por comas ,  

    Object u objeto 

        Es un conjunto de múltiplos detos en pares "clave"-"valor".
        Se escriben entre {} y separados por comas , 

    functions o Funciones

        Es un tipo de dato que puede ser "invocado". Se declaran con la palabra reservada "fuction" y el código que se ejecuta va entre {"código"}

*/



    /* Array */

let misSeries = ["my score girl","demon slayer","Un amor tan hermoso","boys over flowers"];
let misNumeros = [16,4,2005,15,20];
let tutifruti = ["Mini Fer",16,true];

console.log( misSeries[2] ); // un amor tan hermoso
console.log(misNumeros[4]); // 15
console.log(tutifruti[0]); // Mini Fer



    /* objet */

let perro = {
    nombre: "Coffe",
    edad: 8,
    color: "blanco",
    ladra: true,
    muerde: false,
}

console.log(perro.nombre);
console.log(perro.color);
console.log(perro.muerde);



    /* functions */

function saludar() {
    // código a ejecutar
    console.log("Hola mamá, estoy aprendiendo JS! 😃");
};

// llamamos a la función
saludar();