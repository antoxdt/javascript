/*

Concatenacion de cadenas de texto

es el proceso de unir dos o mas cadenas de texto en una sola. 
Esto se hace urilizando el operador + o las plantillas literales 
(template strings) se usan con backticks `` (acento invertido o comillas agudas) 


*/ 

let miNombre = "Antonio"
let miApellido = "Jimenez"

// Usando el operador +
 
let nombrecompleto = miNombre + " " + miApellido;

console.log(nombrecompleto);

// Usando plantillas literales

let nombreNuevo = `Mi nombre es ${miNombre} ${miApellido} y tengo ${10 * 2} años`;

console.log(nombreNuevo)

/*

Si se utiliza el operador + con valores numericos se suman. pero si se usa con cadenas
de caracterse concatenan

*/

let resultado = 5 + 10; 

console.log(resultado); // 15

let resultadoDos = "5" + 10;

console.log(resultadoDos); // 510

