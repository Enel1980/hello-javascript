/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// 1. Crea un función que utilice error correctamente
function restaNatural(a, b) {
    if (b > a) {
        console.error("Esto es un error")
    }
    else console.log(a - b)
}
restaNatural(3, 2)
restaNatural(2, 3)
// 2. Crea una función que utilice warn correctamente
function restaEntera(a, b) {
    if (b > a) {
        console.warn("Esto no funcionaría en la resta natural")
    }
    console.log(a - b)
}
restaEntera(3, 2)
restaEntera(2, 3)

// 3. Crea una función que utilice info correctamente
function restaGeneral(a, b) {
    if (b > a) {
        console.info("Es una resta entera")
    }
    else console.info("Es como una resta natural")
    console.log(a - b)
}
restaGeneral(3, 2)
restaGeneral(2, 3)

// 4. Utiliza table
let datos = [
    { nombre: "El dato", cantidad: 3 },
    { nombre: "El otro dato", cantidad: 4 }
]
console.table(datos)

// 5. Utiliza group
console.group("Esto")
console.log("Esto, indentado")
console.log("Esto indentado igual")
console.groupEnd()
console.log("Se acabó y volvemos a empezar")


// 6. Utiliza time
console.time("ejecucion")

console.log("Solo esto")

console.timeEnd("ejecucion")

// 7. Valida con assert si un número es positivo
let numero = 7
console.assert((numero <= 0), "Es positivo")

// 8. Utiliza count
console.count("1001")
console.count("1001")
console.count("1001")
console.countReset("1001")
console.count("1001")

// 9. Utiliza trace
console.trace("ahora")

// 10. Utiliza clear
console.clear()