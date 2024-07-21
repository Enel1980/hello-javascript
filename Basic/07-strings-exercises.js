/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let primera = "Voy a unirme"
let segunda = " con esta."
console.log(primera + segunda)

// 2. Muestra la longitud de una cadena de texto
console.log(primera.length)

// 3. Muestra el primer y último carácter de un string
console.log(primera[0],primera[11])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(primera.toUpperCase())
console.log(segunda.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let tercera = `Voy a unirme
con
Esta.`
console.log(tercera)
// 6. Interpola el valor de una variable en un string
console.log(`lo importante es que ${tercera}, 
    ya se los dije`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(primera.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(tercera.includes("Esta"))

// 9. Comprueba si dos strings son iguales
console.log(primera == tercera)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(primera.length == tercera.length)