// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: 

// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.

let numero = prompt("Por favor, ingrese un número")
numero = Number(numero)

numero % 2 == 0 ? console.log(numero + " es divisible por 2") : console.log(numero + " no es divisible por 2")