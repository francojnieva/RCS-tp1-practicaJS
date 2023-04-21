// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:



// input: Hola mundo
// Output: oauo

let frase = prompt("Por favor, ingrese una frase")

frase = frase.toLowerCase()

for (i = 0; i < frase.length; i++) {
    
    if (frase.charAt(i) == "a") document.write(frase.charAt(i))
    
    if (frase.charAt(i) == "e") document.write(frase.charAt(i))
    
    if (frase.charAt(i) == "i") document.write(frase.charAt(i))
    
    if (frase.charAt(i) == "o") document.write(frase.charAt(i))
    
    if (frase.charAt(i) == "u") document.write(frase.charAt(i))
}