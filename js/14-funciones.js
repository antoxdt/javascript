/* 
Funciones

Las funciones son bloques de código reutilizables 
que realizan una tarea específica.

1. Funciones Declaradas

Es la forma más común de declarar funciones.
Se puede llamar a la función antes de su 
definición debido al hoisting, es decir que se 
"elevan" en el contexto de ejecución.

Sintaxis:

function nombreFuncion() {
  // cuerpo de la función
  ...
}

Llamada:

nombreFuncion();
*/

function saludar() {
  console.log("Hola nariz de bola! 🤥");
}

saludar();

/*
2. Funciones Expresadas (Anónimas)

Este tipo de funciones se asignan a una variable.
No pueden ser llamadas antes de su definición.

Sintaxis:

const nombreConstante = function() {
  // cuerpo de la función
  ...
}

Llamada:

nombreConstante();
*/

const despedir = function () {
  console.log("¡Adiós vaquero! 🤠");
}

despedir();

/*
3. Funciones Flecha (Arrow Function)

Tienen una sintaxis más concisa, son útiles para ejecuciones
cortas. Generalmente se asignan a una variable.

Sintaxis:

const nombreConstante = () => {
  // cuerpo de la función
  ...
}

Llamada:

nombreConstante();
*/

const mensaje = () => {
  console.log("Muero de hambre 🍞");
}

mensaje();

/*
Las funciones pueden aceptar parámetros para 
recibir datos cuando son llamadas.

Sintaxis:

function nombreFuncion(parametro1, parametro2) {
  // cuerpo de la función
  ...
}

Llamada:

nombreFuncion(argumento1, argumento2);

*/

function sumar(num1, num2) {
  console.log(`El resultado de la suma es: ${num1 + num2}`);
}

sumar(2, 3);
sumar(245, 674);
sumar(.45, .74);
sumar(24554648, 6748794784);

function saludo(nombre) {
  console.log(`¡Hola ${nombre}!`)
}

saludo(`Daniel`);
saludo(`Vane`);
saludo(`Antonio`);
saludo(`Fer Chacuaca 🗣`);

/*

Parametros por defecto 

En las funciones podemos tener valores si no se proporcionan argumentos
al llamar la funcion 

sintaxis: 
fuction nombreFuctión (Parametro1 = valorDefault){
// cuerpo de la función
...
}

Llamada:

nombreFuncion(); // usa los valores por defecto
nombreFuncion(argumento1) // usa el valor del argumento

*/

const multiplicar = function (num1 = 1, num2 = 2) {
  console.log(`El resultado de multiplicar ${num1} por ${num2} es: ${num1 * num2}`)


}

multiplicar();
multiplicar(8, 5);
multiplicar(890, 478);

/* 
Crear una funcion que de la bienvenida a un usuario personalizado
su nombre y que muestre un mensaje de invitado si no se tiene un 
usuario

*/

const bienvenida = (usuario = `invitado`) => {
  if (usuario === `invitado`) {
    console.log(`¡Regístrate o continúa como invitado! 👉`);
  } else {
    console.log(`¡Bienvenido ${usuario}! 🤗`);
  }
};


bienvenida();
bienvenida("Antonio");
bienvenida("Sherry");
bienvenida("Julio"); 

/* 

Valor de Retorno 

Las funciones pueden devolver un valor utilizando la palabra 
"return"

sintaxis:

function nombreFunción() {
 // Cuerpo de la función
 ...
 return valor;
}

llamada:

const nombreConstante = nombreFuncion();


*/

function despedida(nombre = `Antonio`) {
  return `¡Adiós ${nombre}! 🤡`
}

const resultado = despedida(`Antonio`);

console.log(resultado); 


/* 

Return implicito

Las funciones flecha no necesita la palabra return, en su 
estructura más simple (una sola línea)

Sintaxis:

Const nombreConstante = () => valor;

*/

const restar = (num1, num2) => num1 - num2;

const resultadoResta = restar(10,5);

console.log(resultadoResta);