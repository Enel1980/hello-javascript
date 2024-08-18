/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Crea una clase que reciba dos propiedades
class PersonBis {

    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let person1 = new PersonBis('Victor', 44)
console.log(person1)

// 2. Añade un método a la clase que utilice las propiedades
class PersonBisMethod extends PersonBis {

    surname() {
        console.log("Se podría agregar el apellido")
    }
}

let person2 = new PersonBisMethod('PU', 3)

// 3. Muestra los valores de las propiedades e invoca a la función
console.log(person2.name)
person2.surname()

// 4. Añade un método estático a la primera clase
class MathOperations extends PersonBisMethod {

    static sum(a, b) {
        return a + b
    }
}

// 5. Haz uso del método estático
console.log(MathOperations.sum(3, 6))

// 6. Crea una clase que haga uso de herencia
person2.surname()

// 7. Crea una clase que haga uso de getters y setters
class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }
    get bank() {
        return this.#bank
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("NotBrais", 37, "NotMoureDev", "IBAN123456789")

console.log(person6)

// 8. Modifica la clase con getters y setters para que use propiedades privadas
console.log(person6.name)

// 9. Utiliza los get y set y muestra sus valores
console.log(person6.bank)

// 10. Sobrescribe un método de una clase que utilice herencia 
person6.bank = "new IBAN123456789"
console.log(person6.bank)