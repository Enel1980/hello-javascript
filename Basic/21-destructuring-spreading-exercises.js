/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let arr = [10, 20, 30, 40, 50];
let [a, b] = arr;
console.log([a, b])

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [c, d, , , , e = 60] = arr;
console.log([c, d, e])

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const ejemplar = { nombre: 'Batman', nombreReal: 'Bruce Wayne' };
const { nombre, nombreReal } = ejemplar;
console.log([nombre, nombreReal])

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
const hero = { name: 'Batman', realname: 'Bruce Wayne', universe: 'DC' };
const { realname: secretname, universe: comic } = hero;
console.log([secretname, comic])

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const person = {
    name2: {
        firstName: 'John',
        lastName: 'Doe'
    },
    address: {
        city: 'New York'
    }
}
const { name2: { firstName, lastName }, address: { city, country } } = person;

console.log(firstName);
console.log(city)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

let array3 = [...array1, ...array2]
console.log(array3)


// 7. Usa propagación para crear una copia de un array
let array4 = [...array1]
console.log(array4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
const person2 = {
    name3: {
        firstName2: 'John',
        lastName2: 'Doe'
    },
    address2: {
        city2: 'New York'
    }
}
const person3 = {
    name4: {
        firstName3: 'Juan',
        lastName3: 'Perez'
    },
    address3: {
        city3: 'San Salvador'
    }
}
const person4 = { ...person2, ...person3 }
console.log(person4)

// 9. Usa propagación para crear una copia de un objeto
person5 = { ...person4 }
console.log(person5)

// 10. Combina desestructuración y propagación
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

const [, firstNumber, secondNumber] = numbersOne;
const combinedNumbers = [...numbersTwo, firstNumber, secondNumber]
console.log(combinedNumbers);
