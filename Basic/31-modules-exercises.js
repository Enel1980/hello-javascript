/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// 1. Exporta una función
export function sub(a, b) {
    return a - b
}

// 2. Exporta una constante
export const ElPi = 3.141692

// 3. Exporta una clase
export class CircularSector {

    constructor(radius, angle) {
        this.radius = radius
        this.angle = angle
    }

    area() {
        return Math.PI * this.radius * angle / 360
    }

    longArc() {
        return 2 * Math.PI * this.radius * angle / 360
    }

}

// 4. Importa una función
import { add } from "./28-export-modules.js"
console.log(add(1, 2))

// 5. Importa una constante
import { PI } from "./28-export-modules.js"
console.log(PI)

// 6. Importa una clase
import { Circle } from "./28-export-modules.js"
let circle2 = new Circle(1)
console.log(circle2.area())

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function substract2(a, b) {
    return a - b
}
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import defaultImport from "./28-export-modules.js"
console.log(defaultImport(4, 8))
// 9. Exporta una función, una constante y una clase desde una carpeta
//export { MyExport } from "./directory/file.js"

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
//import { MyImport } from "./directory/file.js"
