/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades
let NotAPerson = {
    name: "V",
    age: 44,
    alias: "VictorDev"
}
// 2. Accede y muestra su valor
console.log(NotAPerson)

// 3. Agrega una nueva propiedad
NotAPerson.Adition = "nuevo"

// 4. Elimina una de las 3 primeras propiedades
delete NotAPerson.age

// 5. Agrega una función e invócala
NotAPerson.Funca = function laFuncion() {
    console.log("Esta es mi función")
}
NotAPerson.Funca()

// 6. Itera las propiedades del objeto
for (let key in NotAPerson) {
    console.log(key + ": " + NotAPerson[key])
}

// 7. Crea un objeto anidado
let ReallyNotAPerson = {
    name: "V",
    age: 44,
    alias: "VictorDev",
    Objeto: NotAPerson
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(ReallyNotAPerson)

// 9. Comprueba si los dos objetos creados son iguales
console.log(NotAPerson == ReallyNotAPerson)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(NotAPerson.age == ReallyNotAPerson.age)
console.log(NotAPerson.age == ReallyNotAPerson.Objeto.age)