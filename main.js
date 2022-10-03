/*Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
por teclado (recuerda pasar de String a double con parseDouble). Usa la
constante PI. */

//let radio = prompt('Introduce un numero');
let radio = prompt('Introduce un número');
const pi = Math.PI;
console.log(pi * (parseInt(radio) ** 2));