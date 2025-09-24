/* 

Operadores

Son simbolos que indican al interprete que debe realizarse una operacion matematica, logica o relacional
y producir un resultado  

1. Operadores Aritmeticas 

se utilizan operaciones matematicas básicas como la suma, resta, division y multiplicacion

+ sumar
- restar
* multiplicar
/ dividir 
% módulo (residuo de una division)
++ incremento
-- decremento

Expresion: conjunto de valores, variables y operadores

*/

lat a = 10;
lat b = 5;


console . log(a + b) // 15
console . log(a - b) // 5
console . log(a * b) // 50
console . log(a / b) // 2
console . log(a % b) // 0

a++;
console . log(a) // 11
console . log(b) // 4


/*

2. Operadores de asignacion

Estos operadores se utilizan para asignar valores a las variantes

= Asigna
+= Suma y asigna
-= resta y asigna
*= multiplica y asigna
/= divide y asigna


*/

let c = 20;
console.log(c) //20

c += 5; // 25
c -= 10; // 15
c *= 2; // 30
c /= 3; // 10
c %= 3; // 1

console.log(c);

/*

3. Operadores de comparacion 

Estos operadores se utilizan para comparar dos valores y devolver un valor booleano 
(true o false)

== igualdad (compara solo el valor)
=== igualdad estricta (compara el valor y el tipo)
!= desigualdad (compara solo el valor)
!== desigualdad estricta (compara el valor y el tipo)
> mayor que
< menor que 
>= mayor o igual que 
<= menor o igual que 

*/

let d = 10; // number - numero
let e = "10"; // string - cadena de caracteres

console.log(d == e); // true
console.log(d === e); // false
console.log(d != e); // false
console.log(d !== e); // true  
console.log(d > 5); // true
console.log(d < 15); // true
console.log(d >= 10); // true
console.log(d <= 5); //false

/*

4. Operadores lógicos 

se utilizan para combinar expresiones booleanas

&& AND (y) -si ambos valores son verdadero el resultado es 
verdadero, si al menos un valor es falso el resultado es falso


|| OR (o) - si al menos un valor es verdadero el resultado es verdadero, solo si ambos valores son falsos 
el resultado es falso 

! NOT (no) - niega el valor. El resultado es el valor contrario al que se esta negando

*/

let f = true;
let g = false;

console.log(f && g); //false
console.log(f || g); //true
console.log(!f); // true
console.log(!g); // true