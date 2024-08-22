/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Captura una excepción utilizando try-catch
function subsIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (a == 0 || b == 0) {
        throw new SubsZeroIntegerError("Se está intentando restar cero", a, b)
    }
    return a - b
}

try {
    console.log(subsIntegers(10, "cinco"))

} catch (error) {
    console.log("Se ha producido un error:", error.message)
}



// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(subsIntegers(10, "cinco"))

} catch (error) {
    console.log("Se ha producido un error:", error.message)
} finally {
    console.log("Intento de operación finalizada")
}

// 3. Lanza una excepción genérica
try {
    // Intentamos ejecutar este código
    let result = someFunction();
    console.log(result);
} catch (error) {
    // Si ocurre un error, se captura aquí
    console.error("Ocurrió un error:", error.message);
}

// 4. Crea una excepción personalizada
class SubsZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printLosNumbers() {
        console.log(this.a, " - ", this.b)
    }
}


// 5. Lanza una excepción personalizada
try {
    console.log(subsIntegers(10, 0))

} catch (error) {
    console.log("Se ha producido un error:", error.message)
    error.printLosNumbers()
}

// 6. Lanza varias excepciones según una lógica definida
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new CustomError("El usuario debe tener un nombre.");
    }
    if (!user.age) {
        throw new CustomError("El usuario debe tener una edad.");
    }
    return true;
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    let user = { name: "", age: null };
    validateUser(user)
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Error de validación:", error.message)
    } else {
        console.error("Error desconocido:", error)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["123.45", "abc", "67.89", "NaN", "45.67"]
const resultados = []

for (let i = 0; i < valores.length; i++) {
    try {
        let valor = parseFloat(valores[i]);
        if (isNaN(valor)) {
            throw new Error(`El valor "${valores[i]}" no es un número valido.`);
        }
        resultados.push(valor);
    } catch (error) {
        console.error(`Error al convertir el valor en la posición ${i}: ${error.message}`);
    }
}

console.log("Resultados:", resultados)

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropertyMissingError extends Error {
    constructor(property) {
        super(`La propiedad "${property}" está ausente.`);
        this.name = "PropertyMissingError";
    }
}

function verificarPropiedad(obj, propiedad) {
    if (!obj.hasOwnProperty(propiedad)) {
        throw new PropertyMissingError(propiedad);
    }
    return true;
}

try {
    const usuario = { nombre: "Juan", edad: 30 };
    verificarPropiedad(usuario, "email");
} catch (error) {
    if (error instanceof PropertyMissingError) {
        console.error("Error de validación:", error.message);
    } else {
        console.error("Error desconocido:", error);
    }
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
async function retryOperation(operation, maxRetries = 10) {
    let attempt = 0;
    while (attempt < maxRetries) {
        try {
            return await operation();
        } catch (error) {
            attempt++;
            console.error(`Intento ${attempt} fallido: ${error.message}`);
            if (attempt >= maxRetries) {
                throw new Error(`Operación fallida después de ${maxRetries} intentos.`)
            }
        }
    }
}

async function ejemploOperacion() {
    if (Math.random() > 0.7) {
        return "Operación exitosa";
    } else {
        throw new Error("Error simulado");
    }
}

retryOperation(ejemploOperacion)
    .then(result => console.log(result))
    .catch(error => console.error(error.message))