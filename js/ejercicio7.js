// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 

// input: 15 , 3, 9


// Output: El 15 es el número más grande

let primerNum = prompt("ingrese el primer número")
let segundoNum = prompt("ingrese el segundo número")
let tercerNum = prompt("ingrese el tercer número")

primerNum = Number(primerNum)
segundoNum = Number(segundoNum)
tercerNum = Number(tercerNum)

let mayor = primerNum;

if (segundoNum > mayor) mayor = segundoNum;

if (tercerNum > mayor) mayor = tercerNum;

document.write("El mayor es " + mayor)