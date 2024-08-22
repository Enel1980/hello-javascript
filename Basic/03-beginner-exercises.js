/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Escribe un comentario en una línea
'Comentario'
// 2. Escribe un comentario en varias líneas
/*Comentario
en varias líneas"*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let numero = 3
let cadena = 'String'
let GranEntero = BigInt(25412345123451254)
let Booleano = true

// 4. Imprime por consola el valor de todas las variables
console.log(numero)
console.log(cadena)
console.log(GranEntero)
console.log(Booleano)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof (numero))
console.log(typeof (cadena))
console.log(typeof (GranEntero))
console.log(typeof (Booleano))

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
numero = 5
cadena = 'Otro String'
GranEntero = BigInt(513245123451)
Booleano = false
console.log(typeof (numero))

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
numero = '5'
cadena = 12
GranEntero = 'string'
Booleano = 'no se'
console.log(typeof (numero))
console.log(typeof (undefined))
console.log(typeof (null))
console.log(typeof (Symbol))

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const pi = 3.14
console.log(pi)

// 9. A continuación, modifica los valores de las constantes
// pi = 3

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
//Entonces era así