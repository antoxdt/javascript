/*
Las clases JS son una forma de definir objetos, sus propiedades
y métodos, creando un prototipo del cual se generarán varios objetos, heredando su
comportamiento.

Los nombres de las clases empiezan con mayúsculas.

Sintaxis:

class NombreObjeto {
    // Utilizamos el método constructor especial para inicializar objetos.
    constructor(propiedades){
        this.key = prop1;
        this.key = prop2;
    }
}
*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método
    saludar() {
        alert(`Hola soy ${this.nombre} y tengo ${this.edad} años!`);
    }
}

/*
Crear instancias de la clase 

Vamos a utilizar una constante y a crear una nueva instancia con la siguiente sintaxis:

const nombreConstante = new NombreClase(prop1, prop2);
*/

const persona1 = new Persona("Juanito", 24);
const persona2 = new Persona("María", 22);
const persona3 = new Persona("Pablo", 23);

/* Mostrar personas */
console.log(persona1);
console.log(persona2);
console.log(persona3);

/* Accedemos a los datos */
console.log(`Él es ${persona1.nombre} y tiene ${persona1.edad}.`);
console.log(`Ella es ${persona2.nombre} y tiene ${persona2.edad}.`);
console.log(`Él es ${persona3.nombre} y tiene ${persona3.edad}.`);

/* llamamos al metodo saludar de cada objeto */

persona1.saludar();
persona2.saludar();
persona3.saludar();

