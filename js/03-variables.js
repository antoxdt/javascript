/* 

vaiables 


son contenedores que almacenan datos. En JS, pueden declarar variables utilizando las palabras clave "var", "let" y "const".

var: es la forma mas antigua de declarar variables. Tiene un alcance global o de función y puede ser redeclarada y actualizada.

let: introducida en ES6, tiene un alcance de bloque y puede ser actualizada pero redeclararse dentro del mismo enlace.

const:tambien introducida en ES6, tiene un enlace de bloque y no puede ser ni redeclarada ni actualizada. Se utiliza para valores que no deben cambiar.

*/



/* declaración de var */

var nombre = "Ant";
console.log(nombre); //Ant

nombre = "Juan"; // Actualización


/* Declaracion con let */

let edad = 20;
console.log(edad);

edad = 15 // Actualización



/* Declaracion con const */

const PI = 3.1416;
console.log(PI);

/* PI = 3.1875; */ // Esto da error, no se puede actualizar una constante