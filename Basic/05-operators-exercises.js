/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
let a = 3
let b = 6
c = a + b
d = a - b
e = a * b
f = a / b

console.log(a, b, c, d, e, f)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
c += 2
d -= 2
e *= 2
f /= 2

console.log(a, b, c, d, e, f)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
g = a < 4
h = f > 0
i = e == 36
j = b > 5

console.log(g, h, i, j)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
g = a > 10
h = f <= -5

console.log(g, h)

// 5. Utiliza el operador lógico and
console.log(4 > 5 && 3 < 4)

// 6. Utiliza el operador lógico or
console.log(4 < 3 || 1 < 2)

// 7. Combina ambos operadores lógicos
console.log((4 > 5 && 3 < 4) && (4 < 3 || 1 < 2))

// 8. Añade alguna negación
console.log(!(1<2))

// 9. Utiliza el operador ternario
depende = false
depende ? console.log(4 + 5) : console.log(3 + 4)
// 10. Combina operadores aritméticos, de comparáción y lógicas
elif = false
elif ? console.log(2**3) : console.log(3 > 4)