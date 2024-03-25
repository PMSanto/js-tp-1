//TP1
//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("un mensaje");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World");

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write(3 + 5);

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
//Ejemplo:
//input: Coder
//Output: Hola Coder
let nombreUsuario = prompt("Introduce tu nombre");
console.log("Hola " + nombreUsuario);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//Nota: Tener en cuenta la siguiente función: parseInt
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
let unNumero = parseInt(prompt("introduce un numero"));
let otroNumero = parseInt(prompt("introduce otro número:"));
console.log(unNumero + otroNumero);

//6.-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//Ejemplo:
//input: 15 , 3
//Output: El 15 es el número más grande
let numero1 = parseInt(prompt("introduce un numero"));
let numero2 = parseInt(prompt("introduce otro numero"));
if (numero1 > numero2) {
  console.log(numero1 + " es mayor");
} else {
  console.log(numero2 + " es mayor");
}

/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande*/
let num1 = parseInt(prompt("introduce un numero"));
let num2 = parseInt(prompt("introduce otro numero"));
let num3 = parseInt(prompt("introduce otro numero mas"));
if (num1 > num2 && num1 > num3) {
  console.log(num1 + " es el mayor");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " es el mayor");
} else if (num3 > num2 && num3 > num1) {
  console.log(num3 + " es el mayor");
} else {
  console.log("hay numeros iguales");
}

/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.*/

let numero = prompt("introducir numero");
if (numero % 2 === 0) {
  console.log("el " + numero + " es divisible por 2");
} else {
  console.log("el " + numero + " no es divisible en 2");
}

/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 
input: 20
Output: El 20 es divisible por 2. */

let Numero = prompt("introduce un numero");
if (
  Numero % 2 === 0 ||
  Numero % 3 === 0 ||
  Numero % 5 === 0 ||
  Numero % 7 === 0
) {
  console.log("el " + Numero + " es divisible por 2, o 3, o 5, o 7");
} else {
  console.log("el " + Numero + " no es divisible por 2, o 3, o 5, o 7");
}

/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 
input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.*/

let algunNumero = prompt("introduce un numero");
let divisor1 = 2;
let divisor2 = 3;
let divisor3 = 5;
let divisor4 = 7;
if (algunNumero % divisor1 === 0) {
  console.log("el " + algunNumero + " es divisible por" + divisor1);
} else if (algunNumero % divisor2 === 0) {
  console.log("el " + algunNumero + " es divisible por" + divisor2);
} else if (algunNumero % divisor3 === 0) {
  console.log("el " + algunNumero + " es divisible por" + divisor3);
} else if (algunNumero % divisor4 === 0) {
  console.log("el " + algunNumero + " es divisible por" + divisor4);
} else console.log(" no es divisible por 2, o 3, o 5, o 7");
