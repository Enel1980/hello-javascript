/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales
let animales = new Array("perro", "gato", "ardilla", "conejo", "mono")
// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("leon")
animales.push("tigre")
// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
cinco_libros = new Set(["HP1", "1984", "Grandeza para cada dia", "Juego de tronos", "Breve historia de occcidente"])
// 5. Añade dos más. Uno de ellos repetido
cinco_libros.add("1984")
cinco_libros.add("Revelion en la granja")
// 6. Elimina uno concreto a tu elección
cinco_libros.delete("HP1")
console.log(cinco_libros)
// 7. Crea un mapa que asocie el número del mes a su nombre
meses = new Map([
    [0, "Enero"],
    [1, "Febrero"],
    [2, "Marzo"],
    [3, "Abril"],
    [4, "Mayo"],
    [5, "Junio"],
    [6, "Julio"],
    [7, "Agosto"],
    [8, "Septiembre"],
    [9, "Octubre"],
    [10, "Noviembre"],
    [11, "Diciembre"]
])
console.log(meses)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has(5))
console.log(meses.get(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("Verano", [meses.get(5), meses.get(6), meses.get(7)])
console.log(meses)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let elArraySetMap = new Array("uno", "dos")
console.log(elArraySetMap)
let elArraySetMap2 = new Set([elArraySetMap])
console.log(elArraySetMap2)
let elArraySetMap3 = new Map(elArraySetMap2)
console.log(elArraySetMap3)