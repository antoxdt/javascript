/* 
switch

Es una sentencia que se utiliza para realizar diferentes acciones según distintas condiciones.

se suele usar como forma alternativa a multiples sentencias if-else cuando se tiene una sola variable que puede tomar distintos valores.

Sintaxis

switch (variable) {
// Casos según según se comparen 

case valor1
  //El código a ejecutar
  break;

case valor2
  // El código a ejecutar
  break;

case valor3
  // El código a ejecutar
  brea;

default:
  Este es el codigo que se ejecuta si la expresión no concide con ningun caso
}
*/

// varible a evaluar
let licenciatura = prompt("Escribe la licenciatura que te interese; televisión, diseño, consultoria"); // televisión, diseño, consltoria.

switch (licenciatura) {
    case "televisión":
        console.log("haz elegido la liceciatura de television, que mal por ti");
        break;
    case "diseño":
        console.log("haz elegido la licenciatura de diseño, seras muy fregon");
        break;
    case "consultoria":
        console.log("haz elegido la licenciatura de consultoria, seras una diva");
        break;
    default:
        console.log("tas mal");
}