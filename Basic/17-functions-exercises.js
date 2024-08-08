/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a = 0, b = 0) {
    console.log(a + b)
}
suma(4)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayor(miArray) {
    elGrande = Math.max(...miArray)
    console.log(elGrande)
}
mayor([3, 3, 5, 5, 6])

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

const cadena = "Esta es la cadena de texto";
const result = countVowels(cadena);
console.log(`Number of vowels in "${cadena}": ${result}`);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function Mayusculas(string) {
    console.log(string.toUpperCase())
}
Mayusculas("Esto es cobol")

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function findPrimeNumbers(arr) {
    const isPrime = num => {
        if (num <= 1) return false; // Negative numbers, 0, and 1 are not prime
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) return false; // If divisible by any number, not prime
        }
        return true; // Otherwise, it's prime
    };

    return arr.filter(isPrime);
}

// Example usage:
const myArray = [2, 5, 10, 13, 17, 20];
const primeNumbers = findPrimeNumbers(myArray);
console.log("Prime numbers in the array:", primeNumbers);

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const array1 = [1, 2, 3];
const array2 = [2, 3, 4, 5];
const commonElements = array1.filter(value => array2.includes(value));
console.log("Common elements:", commonElements); // Outputs: [2, 3]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumEvenNumbers(arr) {
    const evenSum = (arr) => arr.reduce((acc, num) => (num % 2 === 0) ? acc + num : acc, 0);
    return evenSum(arr);
}

// Example usage:
const arrayA = [1, 2, 3, 4, 5];
const resultA = sumEvenNumbers(arrayA);
console.log("Sum of even numbers:", resultA); // Outputs: 30 (2 + 4 + 6 + 8 + 10)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function squareElements(arr) {
    return arr.map(x => x ** 2);
}

// Example usage:
const inputArray = [1, 2, 3, 4];
const resultB = squareElements(inputArray);
console.log(resultB); // Output: [1, 4, 9, 16]

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reverseWords(inputString) {
    const words = inputString.split(' '); // Split the string into words
    const reversedWords = words.reverse(); // Reverse the order of words
    return reversedWords.join(' '); // Join the reversed words back into a string
}

// Example usage:
const inputStr = "Hello, world! This is a test.";
const resultC = reverseWords(inputStr);
console.log(resultC); // Output: "test. a is This world! Hello,"

// 10. Crea una función que calcule el factorial de un número dado
const factorial = n => (n > 1 ? n * factorial(n - 1) : n);
const resultD = factorial(5); // Example: 5! = 120
console.log(resultD);
