// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo: 

// input: 15 , 3


// Output: El 15 es el número más grande

let primerNumero = prompt("Ingrese el primer número")
let segundoNumero = prompt("Ingrese el segundo número")

primerNumero = Number(primerNumero)
segundoNumero = Number(segundoNumero)

primerNumero > segundoNumero ? document.write(primerNumero + " es mayor") : segundoNumero > primerNumero ? document.write(segundoNumero + " es mayor") : document.write("Son iguales!")

