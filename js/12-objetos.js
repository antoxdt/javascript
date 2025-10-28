/*
Son colecciones de propiedades. Una propiedad es una asociación entre un 
nombre (clave, key) y un valor.

Los valores pueden ser de distintos tipos: números, cadenas de texto, booleanos, 
arreglos, etc.
*/

const persona = {
  nombre: "Antonio",
  apellido: "Romero",
  edad: 20,
  esInvitado: false,
  mounstros: ["Pumpkinhead", "Wolf man", "Frankenstein"],

  saludar: function() {
    /* This es una palabra que autoreferencia al objeto */
    console.log("Hola mi nombre es " + this.nombre + " y me gusta " + this.mounstros[0]);
  }
};

// Mostrar el objeto en la consola
console.log(persona);

// Acceder a propiedades con punto y corchetes
console.log(persona.nombre);
console.log(persona["apellido"]);

// Concatenación clásica
console.log("Hola soy " + persona.nombre + " " + persona.apellido + " y tengo " + persona.edad + " años!");

// Plantillas literales 
console.log(`Hola soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años! 🐖`);

// accedemos al booleano
console.log(persona.esInvitado);

if (persona.esInvitado === true) {
    console.log("Puedes pasar al Halloween de Enfoco 🎃");
} else {
    console.log("No puedes pasar, ve a tu casita 👺");
}

// Acceder al array
console.log(persona.mounstros[0]);

// Reto 2: Mostrar por consola: Hola soy Antonio tengo 20 años e iré al halloween disfrazado de 
// Frankenstein
console.log(`Hola soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años e iré al halloween disfrazado de ${persona.mounstros[2]}`);

/*
Metodos de los objetos.

Los metodos son funciones que están asociadas a un objeto. Se pueden llamar 
utilizando la notación de punto.

objeto.metodo
*/

console.log(persona.saludar()); // así no accedemos a los métodos.
persona.saludar(); // Esta es la forma de acceder a los métodos.
