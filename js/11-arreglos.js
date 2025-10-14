/*
 Arreglos (arrays)

 Un arreglo es una colección de datos, es decir, una lista de 
 elementos.

 En JS los arreglos se definen utilizando los corchetes []
 y los elementos internos se separan por comas 

 Pueden contener el mismo tipo de dato o de diferentes tipos, 
 incluso pueden contener arreglos anidados
*/

let frutas = ["Manzana", "Sandia", "Piña", "Pera", "Kiwi"];
let calificaciones = [10, 8, 4, 10];
let misDatos = ["Antonio", 20, true];
let coordenadas = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(frutas);
console.log(calificaciones);
console.log(misDatos);
console.log(coordenadas);

/* 
 length 👉 Nos indica la cantidad de elementos 
 que tenemos dentro del arreglo 
*/

console.log(frutas.length);
console.log(misDatos.length);
console.log(calificaciones.length);
console.log(coordenadas.length);

/*
 índice 👉 Nos indica la "posición" dentro del arreglo
*/

console.log("Mi fruta favorita es: " + frutas[1] + " 🍉");
console.log("Con limón saqué: " + calificaciones[2] + " de calificación! ☹");
console.log("Me llamo " + misDatos[0] + " y tengo " + misDatos[1] + " años! 😎");
console.log(coordenadas[0][2]);

/*
 Métodos de los arreglos:

 push() 👉 Agrega uno o más elementos al final del arreglo.
 pop() 👉 Elimina el último elemento del arreglo y lo devuelve.
 shift() 👉 Elimina el primer elemento del arreglo y lo devuelve.
 unshift() 👉 Agrega uno o más elementos al inicio del arreglo. 
 indexOf() 👉 Devuelve el índice del primer elemento que coincide con el valor
 especificado o devuelve -1 si no lo encuentra.
*/

console.log(frutas.length); // 5

frutas.push("uvas", "papaya");
console.log(frutas.length); // 7

let ultimaFruta = frutas.pop();
console.log(frutas.length); // 6 
console.log("Fruta eliminada con pop:", ultimaFruta); // papaya

let primeraFruta = frutas.shift();
console.log(frutas.length); // 5
console.log("Fruta eliminada con shift:", primeraFruta); // Manzana

frutas.unshift("maracuyá");
console.log(frutas.length); // 6

frutas.unshift("maracuya", "fresa", "mango");
console.log(frutas.length); // 9

frutas.push("mango");
console.log(frutas);

let indiceFruta = frutas.indexOf("mango");
console.log("Índice de 'mango':", indiceFruta);

/*
 Iteración sobre arrays

 Tomamos una lista de datos y accedemos a sus datos a través de un bucle.
*/

frutas.unshift("pitahaya", "caguama");

for (let i = 0; i < frutas.length; i++) {
    console.log("Se me antojó una " + frutas[i]);
}
