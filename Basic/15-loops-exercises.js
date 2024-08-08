/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 0; i < 21; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let contador = 0
for (let i = 0; i < 101; i++) {
    contador = contador + i
}
console.log(contador)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
nombres = ["juan", "luis", "carlos"]
for (let valor of nombres) {
    console.log(valor)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

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

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
function multiplyArray(numbers) {
    if (!Array.isArray(numbers)) {
        return 'Input is not an array.';
    }

    if (numbers.length === 0) {
        return 'Array is empty.';
    }

    let result = 1;
    for (const num of numbers) {
        if (typeof num !== 'number') {
            return 'Array contains non-numeric values.';
        }
        result *= num;
    }

    return result;
}

let ThoseNumbers = [2, 3, 5, 8]; // Replace with your array of numbers
const product = multiplyArray(ThoseNumbers);
console.log(`Product of the array: ${product}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
}
printMultiplicationTable(5)

// 8. Usa un bucle para invertir una cadena de texto
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const inputString = 'Frase a invertir';
const result2 = reverseString(inputString);
console.log(result2);


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
function generateFibonacci(n) {
    const fibonacciNumbers = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
        fibonacciNumbers.push(nextNumber);
    }

    return fibonacciNumbers;
}

const first10Fibonacci = generateFibonacci(10);
console.log(first10Fibonacci); // Outputs: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const myArray = [5, 12, 8, 15, 3, 20];
const filteredNumbers = [];

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 10) {
        filteredNumbers.push(myArray[i]);
    }
}

console.log(filteredNumbers); // Outputs: [12, 15, 20]